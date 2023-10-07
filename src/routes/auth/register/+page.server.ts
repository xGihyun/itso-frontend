import { DATABASE_URL } from '$env/static/private';
import { AuthSchema } from '$lib/types';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ fetch, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const userAuth = {
			email,
			password,
			role: 'user'
		};

		const parsedNewUser = AuthSchema.parse(userAuth);

		console.log(parsedNewUser);

		const response = await fetch(`${DATABASE_URL}/auth/register`, {
			method: 'POST',
			body: JSON.stringify(parsedNewUser),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error('Failed to register.');
		}

		console.log('Successfully registered!');

		throw redirect(303, '/login');
	}
};
