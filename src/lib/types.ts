import z from 'zod';

export type Route = {
	name: string;
	path: string;
};

export type Participant = {
	first_name: string;
	middle_name: string;
	last_name: string;
	school: string;
	coach_name: string;
	category: string;
};

export const AuthSchema = z.object({
	email: z.string().email(),
	password: z.string(),
	role: z.enum(['user', 'admin'])
});

export type Category = {
	name: string;
	limit: {
		min: number;
		max: number;
	};
};
