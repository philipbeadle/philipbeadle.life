# philipbeadle.life

Manifesto-style personal site for Philip Beadle — founder, AgenticScale.ai; co-founder, AgenticGrid Foundation; 7-year Holochain core alum.

Built with Astro + Tailwind. Single static page; deploys anywhere (Vercel, Netlify, Cloudflare Pages, Holo Pages once available).

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to ./dist
npm run preview      # preview the built site locally
```

## Deploy

Static site — `dist/` is the deployable artefact. Default Astro config; no platform-specific tweaks needed.

## Editing content

All page content lives in [`src/pages/index.astro`](src/pages/index.astro) and the section components under [`src/components/`](src/components/). The design tokens (colours, fonts, spacing) live in [`tailwind.config.cjs`](tailwind.config.cjs).
