<p align="center">
  <img src="public/orbitra_logo.png" alt="Orbitra Tech" width="88" />
</p>

<h1 align="center">Orbitra Tech</h1>

<p align="center">
  <strong>A full-service digital studio built in Beruwala, Sri Lanka.</strong><br />
  We help SMEs replace spreadsheets, WhatsApp chaos, and outdated sites with web and mobile tools that actually run the business.
</p>

<p align="center">
  <a href="https://orbitratech.net">orbitratech.net</a>
</p>

---

## About

**Orbitra Tech (Pvt) Ltd** partners with growing businesses across Sri Lanka and beyond. We design and ship websites, mobile apps, and internal systems - with fixed pricing, honest timelines, and production-grade engineering.

Alongside client work, we build our own products (like **Worknet** and **Gemnet**) as proof of how we ship.

**Based in:** Beruwala, Sri Lanka · Remote worldwide  
**Contact:** [admin@orbitratech.net](mailto:admin@orbitratech.net)

## This repo

Marketing site and content admin for [orbitratech.net](https://orbitratech.net).

| Layer | Stack |
| --- | --- |
| Frontend | Next.js 16, React 19, Tailwind CSS 4, GSAP |
| CMS | [Payload CMS](https://payloadcms.com) 3 |
| Database | Supabase Postgres |
| Media | Supabase Storage (S3-compatible) |

Page content (company stats, products, logos) is managed in Payload at `/admin`.

## Getting started

**Requirements:** [Bun](https://bun.sh), a Supabase project, and S3 storage keys from the Supabase dashboard.

```bash
bun install
cp .env.example .env   # fill in DATABASE_URL, PAYLOAD_SECRET, S3 keys
bun run migrate        # apply Payload schema (production)
bun run migrate:media-s3  # one-time: upload local /media files to Supabase Storage
bun run init:cms:seed  # optional: seed stats & products
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/admin](http://localhost:3000/admin) for the CMS.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start dev server |
| `bun run build` | Production build |
| `bun run start` | Run production server |
| `bun run migrate` | Run Payload migrations |
| `bun run migrate:create` | Generate a new Payload migration |
| `bun run migrate:media-s3` | Upload local `/media` files to Supabase Storage (one-time) |
| `bun run init:cms` | Sync schema (dev push) |
| `bun run init:cms:seed` | Sync schema + seed landing content |
| `bun run generate:types` | Regenerate Payload TypeScript types |

## Migrations

Two migration systems - keep both:

- **`migrations/`** - Payload CMS table schema (`bun run migrate`)
- **`supabase/migrations/`** - Supabase RLS hardening, storage buckets, and platform SQL

## License

Private - © Orbitra Tech (Pvt) Ltd.
