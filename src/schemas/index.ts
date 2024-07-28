// Form schemas

import { z } from "astro/zod";

export const fullNameSchema = z.object({
	first_name: z.string(),
	middle_name: z.string().optional(),
	last_name: z.string(),
});

const coachSchema = z
	.object({
		email: z.string().email(),

		// NOTE: Could further validate this with `libphonenumber.js`
		contact_number: z.string(),
	})
	.merge(fullNameSchema);

export const registerSchema = z.object({
	students: fullNameSchema.array(),
	coach: coachSchema,
	category_id: z.coerce.number(),
  school_name: z.string()
});

export type FullNameSchema = z.infer<typeof fullNameSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
