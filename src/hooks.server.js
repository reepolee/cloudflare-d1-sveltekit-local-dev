import { db, set_database } from '$lib/server/db';
import { sequence } from '@sveltejs/kit/hooks';

export async function handle_platform({ event, resolve }) {
	!db && set_database(event.platform.env?.DB);
	return await resolve(event);
}

export async function handle_my_hook({ event, resolve }) {
	//  write your own if needed here and add it to the end of sequence below
	return await resolve(event);
}

export const handle = sequence(handle_platform, handle_my_hook);
