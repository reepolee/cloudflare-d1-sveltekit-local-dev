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

## Youtube

[Cloudflare D1 on Sveltekit with Wrangler for local development](https://www.youtube.com/watch?v=Ln5gIINjPeQ)  
[Cloudflare D1 on Sveltekit with Wrangler for local development - Drizzle Edition](https://www.youtube.com/watch?v=et9Wrbmi7hM)  
[Deploy Sveltekit App with D1 to Cloudflare Pages](https://www.youtube.com/watch?v=yPrzfyFlMq4)  
