import { BACKEND_URL } from '$env/static/private';
import { redirect, type Actions } from '@sveltejs/kit';
import z from 'zod';

export const actions: Actions = {
	default: async ({ fetch, request }) => {
		const AuthSchema = z.object({
			email: z.string().email(),
			password: z.string()
		});

		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const userAuth = {
			email,
			password
		};

		const parsedUserAuth = AuthSchema.parse(userAuth);

		console.log(parsedUserAuth);

		const response = await fetch(`${BACKEND_URL}/auth/login`, {
			method: 'POST',
			body: JSON.stringify(parsedUserAuth),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error('Failed to login.');
		}

		console.log('Successfully logged in!');

		throw redirect(303, '/');
	}
};
