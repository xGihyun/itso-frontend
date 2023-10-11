import type { RequestHandler } from '@sveltejs/kit';
import { BACKEND_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch(`${BACKEND_URL}/download`, { method: 'GET' });
	const blob = await response.arrayBuffer();

	console.log(blob);

	return new Response(blob);
};
