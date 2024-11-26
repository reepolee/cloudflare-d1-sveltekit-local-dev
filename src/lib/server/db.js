import { drizzle } from 'drizzle-orm/d1';

export let db = null;

export function set_database(D1_database) {
	db ??= drizzle(D1_database);

	console.log('db:', db);
}
