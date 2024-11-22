# Cloudflare D1 on Sveltekit with Wrangler for local development

Just clone this and run

```bash
pnpm install
wrangler d1 execute D1_DB --local --file .\schema-migration.sql
pnpm run dev
```

Update the TOML file as you see fit for production

## ncu

https://www.npmjs.com/package/npm-check-updates

```bash
pnpm install -g npm-check-updates
```
