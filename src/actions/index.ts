import { registerSchema } from "@/schemas";
import { ActionError, defineAction } from "astro:actions";

export const server = {
  register: defineAction({
    input: registerSchema,
    handler: async (data) => {
      console.log("Register:", data);

      // Sample error handling
      if (data.students.length < 2) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "I need more students!",
        });
      }

      // Do database stuff ...
    },
  }),
};
