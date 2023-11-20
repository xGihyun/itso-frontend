import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/admin') {
		console.log('Access Denied');

		throw redirect(307, '/');
	}

	return await resolve(event);
};
