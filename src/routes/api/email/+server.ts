import type { RequestHandler } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ fetch, request }) => {
	try {
		const arrayBuffer = await request.arrayBuffer();

		const response = await fetch(`${BACKEND_URL}/email`, {
			method: 'POST',
			body: arrayBuffer
		});

		if (response.ok) {
			console.log('Successfully sent email.');
		}
	} catch (err) {
		console.error('An unexpected error occured when sending email: ', err);
	}

	return new Response();
};
