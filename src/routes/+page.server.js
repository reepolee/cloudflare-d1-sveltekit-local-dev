import { db } from '../lib/server/db';
import { country } from '$lib/server/schema';

export async function load() {
	const results = await db.select().from(country).all();
	return {
		countries: results,
	};
}

export const actions = {
	delete: async () => {
		const response = await db.delete(country);
	},
	add: async () => {
		let code = 'SI-' + crypto.randomUUID(); // yes, hacky, just to satisfy unique index contraint
		await db.insert(country).values({ code, text: 'Slovenija' });
	},
};
