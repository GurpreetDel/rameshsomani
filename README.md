# Ramesh Somani — Tribute Website

A cinematic tribute website for Ramesh Somani — founder, chief editor &
publisher of **Exhibit** (India's Tech & Lifestyle magazine, est. 2005),
the force behind **BBC Top Gear Magazine India**, and creator of the
**Tech Fashion Tour** — built for deployment at
**https://rameshsomani.vercel.app/**.

> ⚠️ Unofficial tribute site. Facts compiled from public sources (Instagram
> @ramesh_somani, exhibit.tech, techfashiontour.com and his YouTube, July 2026).
> Not affiliated with Ramesh Somani, Exhibit Technologies or BBC Top Gear.
> Corrections/removal requests honoured promptly.

## Tech stack

- **Vite 7 + React 19 + TypeScript**
- **Tailwind CSS v4** (CSS-first config)
- **Framer Motion 12** — scroll reveals, parallax hero, YouTube lightbox
- **Fonts** — Playfair Display (display) + Space Grotesk (body)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Content

All content lives in **`src/data/content.ts`** — bio, ventures, gallery, press
and socials. Photos live in `public/photos/` (frames from his YouTube journey
video + the Exhibit anniversary cover). Drop in more as `/photos/name.jpg`.

## 🚀 Deploy to Vercel (rameshsomani.vercel.app)

1. Push to a GitHub repo named `rameshsomani`.
2. vercel.com → Add New → Project → Import. Vite auto-detected.
3. The project name `rameshsomani` gives `rameshsomani.vercel.app`.

Or via CLI: `vercel --prod`.
