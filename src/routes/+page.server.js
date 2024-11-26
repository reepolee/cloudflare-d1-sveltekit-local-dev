import { db } from '../lib/server/db';
import { country } from '$lib/server/schema';

export const load = async () => {
	const result = await db.select().from(country).all();
	return {
		countries: result,
	};
};

export const actions = {
	delete: async () => {
		const response = await db.delete(country);
	},
	add: async () => {
		let code = 'SI-' + crypto.randomUUID(); // yes, hacky, just to satisfy unique index contraint
		await db.insert(country).values({ code, text: 'Slovenija' });
	},
};
