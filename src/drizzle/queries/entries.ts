import { db } from "@/drizzle/db";
import {
  CategoriesTable,
  CoachesTable,
  EntriesTable,
  SchoolsTable,
  StudentsTable,
  SyncLogsTable,
} from "@/drizzle/schema";
import { and, desc, eq, gt, or, sql } from "drizzle-orm";

export type EntrySpreadsheetData = {
  id: string;
  createdAt: Date;
  category: {
    name: string;
  };
  school: {
    name: string;
    campus: string | null;
  };
  student: {
    firstName: string;
    middleName: string | null;
    lastName: string;
  };
  coach: {
    firstName: string;
    middleName: string | null;
    lastName: string;
    email: string;
    contactNumber: string;
  };
};

export async function getLatestEntries(
  eventYearId: string,
  tx = db,
): Promise<EntrySpreadsheetData[]> {
  const latestSyncCTE = tx.$with("latest_sync").as(
    tx
      .select({
        latestEntryId: SyncLogsTable.latestEntryId,
        latestEntryCreatedAt: SyncLogsTable.createdAt,
      })
      .from(SyncLogsTable)
      .innerJoin(EntriesTable, eq(EntriesTable.id, SyncLogsTable.latestEntryId))
      .orderBy(desc(EntriesTable.createdAt))
      .limit(1),
  );

  const latestEntries = await tx
    .with(latestSyncCTE)
    .select({
      id: EntriesTable.id,
      createdAt: EntriesTable.createdAt,
      category: {
        name: CategoriesTable.name,
      },
      school: {
        name: SchoolsTable.name,
        campus: SchoolsTable.campus,
      },
      student: {
        firstName: StudentsTable.firstName,
        middleName: StudentsTable.middleName,
        lastName: StudentsTable.lastName,
      },
      coach: {
        firstName: CoachesTable.firstName,
        middleName: CoachesTable.middleName,
        lastName: CoachesTable.lastName,
        email: CoachesTable.email,
        contactNumber: CoachesTable.contactNumber,
      },
    })
    .from(EntriesTable)
    .innerJoin(CategoriesTable, eq(CategoriesTable.id, EntriesTable.categoryId))
    .innerJoin(SchoolsTable, eq(SchoolsTable.id, EntriesTable.schoolId))
    .innerJoin(StudentsTable, eq(StudentsTable.id, EntriesTable.studentId))
    .innerJoin(CoachesTable, eq(CoachesTable.id, EntriesTable.coachId))
    .leftJoin(latestSyncCTE, sql`(1=1)`)
    .where(
      and(
        eq(EntriesTable.eventYearId, eventYearId),
        or(
          sql`(SELECT COUNT(*) FROM ${latestSyncCTE}) = 0`,
          gt(EntriesTable.createdAt, latestSyncCTE.latestEntryCreatedAt),
        ),
      ),
    )
    .orderBy(desc(EntriesTable.createdAt));

  return latestEntries;
}
