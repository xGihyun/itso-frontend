import type { User } from '$lib/types';
import type { Actions } from '@sveltejs/kit';
import { DATABASE_URL } from '$env/static/private';

export const actions: Actions = {
	default: async ({ fetch, request }) => {
		const data = await request.formData();
		const first_name = data.get('first_name')?.toString() || '';
		const middle_name = data.get('middle_name')?.toString() || '';
		const last_name = data.get('last_name')?.toString() || '';
		const school = data.get('school')?.toString() || '';
		const coach_name = data.get('coach_name')?.toString() || '';
		const category = data.get('category')?.toString() || '';

		const new_user: User = {
			first_name,
			middle_name,
			last_name,
			school,
			coach_name,
			category
		};

		console.log(new_user);

		const response = await fetch(`${DATABASE_URL}/register`, {
			method: 'POST',
			body: JSON.stringify(new_user),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error('Failed to register.');
		}

		console.log('Successfully registered!');
		// const result = await response.text();
		//
		// console.log(result);
		// console.log(first_name);
		// console.log(middle_name);
		// console.log(last_name);
		// console.log(school);
		// console.log(coach_name);
	}
};
