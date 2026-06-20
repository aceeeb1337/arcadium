# Arcadium — Complete Site (ready to deploy)

This is your **full website** with the new pages and updated pricing merged in.
Everything here is the real Astro source — build it once and upload the output.

## What changed vs your old site
- ✅ **New pages:** `/pcgaming`, `/consolegaming`, `/pricing`, `/tournaments`
- ✅ **Header nav** now links the new pages (desktop + mobile)
- ✅ **New pricing everywhere** — Standard Rs 300/hr, Premium Rs 420/hr (packs 3/5/10/20/100 hrs),
  PS5 Rs 400 / 700 / 1,000 for 1 / 2 / 4 controllers — applied in the pricing data, FAQ, and SEO schema
- ✅ **Sitemap** updated with the 4 new URLs
- Your homepage, hero video, animations, gallery, etc. are untouched

## Deploy — 3 steps
You need Node.js 18+ installed.

```bash
# 1. install dependencies
npm install

# 2. build the static site  →  output goes to the `dist/` folder
npm run build

# 3. upload the dist/ folder to your host
```

### If you're on Cloudflare Pages (your current setup — there's a functions/ folder)
- Push this folder to your Git repo, or use the Cloudflare dashboard "Upload assets".
- Build command: `npm run build`
- Build output directory: `dist`
- Cloudflare auto-detects the `functions/` API routes, `_headers`, and `_redirects`.

### Any static host (Netlify, Vercel, shared hosting)
- Run `npm run build` locally, then upload everything inside `dist/` to your web root.

## Still to finalize (optional)
- **Tournaments** are sample events. Edit `src/data/tournaments.ts` with your real
  games, dates, entry fees, and prize pools — the page updates automatically.
- **Console game list** lives in `src/data/pricing.ts` (`consoleGames`) — adjust to what you stock.

## Tip
To preview locally before deploying: `npm run dev` then open the printed localhost URL.
