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

## wrangler

https://developers.cloudflare.com/workers/wrangler/install-and-update/

```bash
pnpm install -g wrangler
```

## Drizzle

```bash
pnpm install
pnpm db:generate

# this outputs a unique file name of sql to run, for example
# [✓] Your SQL migration file ➜ drizzle\0000_friendly_clea.sql 🚀
# push it to wrangler d1 to create the local db file

wrangler d1 execute D1_DB --local --file ./drizzle/0000_friendly_clea.sql
pnpm run dev
```
