// import type { User } from '$lib/types';
import type { Actions } from '@sveltejs/kit';
import { DATABASE_URL } from '$env/static/private';
import z from 'zod';

export const actions: Actions = {
	default: async ({ fetch, request }) => {
		const UserSchema = z.object({
			first_name: z.string(),
			middle_name: z.string(),
			last_name: z.string(),
			school: z.string(),
			coach_name: z.string(),
			category: z.string()
		});

		// type User = z.infer<typeof UserSchema>;

		const data = await request.formData();
		const school = data.get('school');
		const coach_name = data.get('coach_name');
		const category = data.get('category');
		const limit = Number(data.get('participant_limit'));

		const participants = Array.from({ length: limit }, (_, idx) => {
			const first_name = data.get(`first_name_${idx}`);
			const middle_name = data.get(`middle_name_${idx}`);
			const last_name = data.get(`last_name_${idx}`);

			return {
				first_name,
				middle_name,
				last_name,
				school,
				coach_name,
				category
			};
		});

		const parsed_users = participants.map((user) => UserSchema.parse(user));

		console.log(parsed_users);

		const response = await fetch(`${DATABASE_URL}/register`, {
			method: 'POST',
			body: JSON.stringify(parsed_users),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error('Failed to register.');
		}

		console.log('Successfully registered!');
	}
};
