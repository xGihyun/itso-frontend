import { z } from "astro/zod";

export const FullNameSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Required" }),
});

export const SchoolSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  campus: z.string().optional(),
});

export const RegisterSchema = z.object({
  categoryId: z.string(),
  school: SchoolSchema,
  students: FullNameSchema.array(),
  coach: FullNameSchema.merge(
    z.object({
      email: z.string().email().min(1, { message: "Required" }),
      contactNumber: z.string().min(1, { message: "Required" }),
    }),
  ),
});

export type FullNameInput = z.infer<typeof FullNameSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
