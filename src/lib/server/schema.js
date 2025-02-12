import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const country = sqliteTable('countries', {
	id: integer('id').primaryKey(),
	code: text('code').unique(),
	text: text('text'),
});
