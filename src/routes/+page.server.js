import { db } from '../lib/server/db';

export async function load() {
	const sql = 'select * from countries';
	const response = await db.prepare(sql).run();

	return {
		countries: response.results,
	};
}

export const actions = {
	delete: async () => {
		const sql = 'delete from countries';
		const response = await db.prepare(sql).run();
	},
	add: async () => {
		let code = 'SI-' + crypto.randomUUID(); // yes, hacky, just to satisfy unique index contraint
		const insert = `insert into countries (code, name) values ("${code}","Slovenija");`;
		await db.prepare(insert).run();
	},
};
