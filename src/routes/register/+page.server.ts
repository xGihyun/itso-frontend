import type { Actions } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';
import z from 'zod';
import { CATEGORIES } from '$lib';

export const actions: Actions = {
	default: async ({ fetch, request }) => {
		try {
			const data = await request.formData();

			const UserSchema = z.object({
				category: z.string(),
				first_name: z.string(),
				middle_name: z.nullable(z.string()),
				last_name: z.string(),
				school: z.string(),
				coach_name: z.string(),
				coach_email: z.string(),
				coach_contact_number: z.string()
			});

			const school = data.get('school');
			const coach_name = data.get('coach_name');
			const coach_email = data.get('coach_email');
			const coach_contact_number = data.get('coach_contact_number');
			const category = data.get('category') as string;
			const categoryValue = CATEGORIES.get(category);

			const limit = Number(data.get('participants_length'));
			const send_email = data.get('send_email') as string;

			console.log(send_email);

			const participants = Array.from({ length: limit }, (_, idx) => {
				const first_name = data.get(`first_name_${idx}`);
				const middle_name = data.get(`middle_name_${idx}`);
				const last_name = data.get(`last_name_${idx}`);

				return {
					category: categoryValue?.name,
					school,
					first_name,
					middle_name,
					last_name,
					coach_name,
					coach_email,
					coach_contact_number
				};
			});

			const parsed_users = participants.map((user) => UserSchema.parse(user));

			console.log(parsed_users);
			console.log();

			const register = await fetch(`${BACKEND_URL}/register`, {
				method: 'POST',
				body: JSON.stringify(parsed_users),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!register.ok) {
				throw new Error('Failed to register.');
			}

			console.log('Successfully registered participants!');

			if (send_email === 'true') {
				const receipt = data.get('file') as Blob;

				console.log('Sending receipt via email...');

				const response = await fetch(
					`${BACKEND_URL}/email?school=${parsed_users[0].school}&contact_person=${parsed_users[0].coach_name}&contact_number=${parsed_users[0].coach_contact_number}`,
					{
						method: 'POST',
						body: receipt,
						headers: {
							'Content-Type': 'application/octet-stream'
						}
					}
				);

				if (response.status !== 200) {
					throw new Error('Failed to send email.');
				}

				console.log('Successfully sent email!');
			}
		} catch (err) {
			console.error('An unexpected error occurred:', err);
			throw new Error('Something went wrong.');
		}
	}
};
