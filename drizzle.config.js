import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/server/schema.js',
	verbose: true,
	strict: true,
	dialect: 'sqlite',
});
