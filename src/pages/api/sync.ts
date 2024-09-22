import { db } from "@/drizzle/db";
import {
  CategoriesTable,
  CoachesTable,
  EntriesTable,
  EventYearsTable,
  SchoolsTable,
  StudentsTable,
  SyncLogsTable,
} from "@/drizzle/schema";
import { sheets } from "@/lib/spreadsheet";
import type { APIRoute } from "astro";
import { and, desc, eq, gt, sql } from "drizzle-orm";

export const GET: APIRoute = async () => {
  console.log("Hello, I am running!", new Date());

  await db.transaction(async (tx) => {
    const eventYears = await tx
      .select({ id: EventYearsTable.id })
      .from(EventYearsTable)
      .where(eq(EventYearsTable.status, "open"))
      .orderBy(desc(EventYearsTable.year))
      .limit(1);

    if (eventYears.length === 0) {
      throw new Error("No open event years found.");
    }

    const [eventYear] = eventYears;

    const latestSyncCTE = tx
      .$with("latest_sync")
      .as(
        tx
          .select()
          .from(SyncLogsTable)
          .orderBy(desc(SyncLogsTable.createdAt))
          .limit(1),
      );

    // TODO: Infer the return type
    const latestEntries = await tx
      .with(latestSyncCTE)
      .select({
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
      .innerJoin(
        CategoriesTable,
        eq(CategoriesTable.id, EntriesTable.categoryId),
      )
      .innerJoin(SchoolsTable, eq(SchoolsTable.id, EntriesTable.schoolId))
      .innerJoin(StudentsTable, eq(StudentsTable.id, EntriesTable.studentId))
      .innerJoin(CoachesTable, eq(CoachesTable.id, EntriesTable.coachId))
      .innerJoin(
        SyncLogsTable,
        gt(
          EntriesTable.createdAt,
          sql`( SELECT ${latestSyncCTE.createdAt} FROM ${latestSyncCTE} )`,
        ),
      )
      .where(
        //and(
        eq(EntriesTable.eventYearId, eventYear.id),
        //gt(
        //  EntriesTable.createdAt,
        //),
        //),
      )
      .orderBy(EntriesTable.createdAt);

    console.log("Entries:", latestEntries);

    if (latestEntries.length === 0) {
      return;
    }

    //await sheets(tx, latestEntries);
  });

  return new Response();
};
