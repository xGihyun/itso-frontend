import { db } from "@/drizzle/db";
import { CoachesTable, EntriesTable, StudentsTable } from "@/drizzle/schema";
import { RegisterSchema } from "@/pages/register/schema";
import { ActionError, defineAction } from "astro:actions";

export const server = {
  register: defineAction({
    input: RegisterSchema,
    handler: async (data) => {
      console.log("Register:", data);

      // Sample error handling
      if (data.students.length < 2) {
        throw new ActionError({
          code: "TOO_MANY_REQUESTS",
          message: "I need more students!",
        });
      }

      // TODO: Handle errors
      //await db.transaction(async (tx) => {
        //const [coach] = await tx
        //  .insert(CoachesTable)
        //  .values(data.coach)
        //  .returning({ coach_id: CoachesTable.coach_id });
        //
        //const students = await tx
        //  .insert(StudentsTable)
        //  .values(data.students)
        //  .returning({ student_id: StudentsTable.student_id });
        //
        //for (const student of students) {
        //  const entry = {
        //    school_name: data.school_name,
        //    student_id: student.student_id,
        //    coach_id: coach.coach_id,
        //    category_id: data.category_id,
        //  };
        //
        //  await tx.insert(EntriesTable).values(entry);
        //}
      //});
    },
  }),
};
