import { db } from "@/drizzle/db";
import {
  CategoriesTable,
  CoachesTable,
  EntriesTable,
  EventYearsTable,
  SchoolsTable,
  StudentsTable,
} from "@/drizzle/schema";
import { RegisterSchema } from "@/pages/register/schema";
import { ActionError, defineAction } from "astro:actions";
import { desc, eq, type InferInsertModel } from "drizzle-orm";

type EntryInsertModel = InferInsertModel<typeof EntriesTable>;

// TODO: Handler errors properly pls

export const server = {
  register: defineAction({
    input: RegisterSchema,
    handler: async (data) => {
      console.log("Register:", data);

      // Not sure if this trycatch is necessary
      try {
        await db.transaction(async (tx) => {
          const eventYears = await tx
            .select({ id: EventYearsTable.id })
            .from(EventYearsTable)
            .where(eq(EventYearsTable.status, "open"))
            .orderBy(desc(EventYearsTable.year))
            .limit(1);

          if (eventYears.length === 0) {
            throw new ActionError({
              code: "NOT_FOUND",
              message: "No open event years found.",
            });
          }

          const schools = await tx
            .insert(SchoolsTable)
            .values(data.school)
            .returning({
              id: SchoolsTable.id,
            });

          if (schools.length === 0) {
            console.error("Failed to insert school data.");
            throw new ActionError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Failed to insert school data.",
            });
          }

          const coaches = await tx
            .insert(CoachesTable)
            .values(data.coach)
            .returning({ id: CoachesTable.id });

          if (coaches.length === 0) {
            throw new ActionError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Failed to insert coach data.",
            });
          }

          const categories = await tx
            .select({
              minimumParticipantLimit: CategoriesTable.minimumParticipantLimit,
              maximumParticipantLimit: CategoriesTable.maximumParticipantLimit,
            })
            .from(CategoriesTable)
            .where(eq(CategoriesTable.id, data.categoryId));

          if (categories.length === 0) {
            throw new ActionError({
              code: "NOT_FOUND",
              message: "Invalid category.",
            });
          }

          const [category] = categories;

          const isStudentCountWithinBounds =
            data.students.length >= category.minimumParticipantLimit &&
            data.students.length <= category.maximumParticipantLimit;

          if (!isStudentCountWithinBounds) {
            throw new ActionError({
              code: "BAD_REQUEST",
              message: "Student count exceeds category participant limit.",
            });
          }

          const students = await tx
            .insert(StudentsTable)
            .values(data.students)
            .returning({ id: StudentsTable.id });

          const [coach] = coaches;
          const [eventYear] = eventYears;
          const [school] = schools;

          for (const student of students) {
            const entry: EntryInsertModel = {
              categoryId: data.categoryId,
              coachId: coach.id,
              eventYearId: eventYear.id,
              schoolId: school.id,
              studentId: student.id,
            };

            await tx.insert(EntriesTable).values(entry);
          }
        });
      } catch (err) {
        if (err instanceof ActionError) {
          console.error(err.message);
          throw err;
        }

        if (err instanceof Error) {
          console.error(err.message);
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: err.message,
          });
        }

        console.error("Unexpected server error:", typeof err);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Unexpected server error: ${typeof err}`,
        });
      }
    },
  }),
};

