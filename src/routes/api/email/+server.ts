import type { RequestHandler } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';

export const POST: RequestHandler = async ({ fetch, request }) => {
	const data = await request.formData();
	const file = data.get('file') as File;

	if (!file) {
		throw new Error("File doesn't exist.");
	}

	const arrayBuffer = await file.arrayBuffer();
	const blob = new Blob([arrayBuffer]);

	const response = await fetch(`${BACKEND_URL}/email`, {
		method: 'POST',
		body: blob
	});

	if (response.ok) {
		console.log('Successfully sent email.');
	}

	return new Response();
};
