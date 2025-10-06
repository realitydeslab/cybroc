Cybroc.fun — ALIFE 2025 Performance Livestream
=============================================

This repository hosts the Next.js build of **cybroc.fun**, a minimalist presentation of the CYBROC performance artwork and its ALIFE 2025 livestream.

Project Layout
- `app/` — App Router pages and global layout.
- `public/` — favicon and shared Open Graph artwork.
- `app/globals.css` — minimalist system mirroring reality.design typography and spacing.
- `next.config.mjs` — configured for static export to GitHub Pages.

Assets to Provide
- Verify the performance loop at `public/Cybroc.mp4` (current file is a placeholder clip; replace with the final master if needed).
- Swap the SVG placeholders in `public/storyboard/` with the making-of imagery sourced from kehuang.org/cybroc (keep filenames or update `storyFrames`).
- Update the `storyFrames` array in `app/page.tsx` if you add or remove frames.

Getting Started
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Visit `http://localhost:3000`

Building & Exporting
- Production build: `npm run build`
- Static export (outputs to `./out`): `npm run export`

GitHub Pages Deployment
- A workflow at `.github/workflows/deploy.yml` builds and exports the site, then publishes it to GitHub Pages on pushes to `main`.
- After the first run, enable GitHub Pages via **Settings → Pages** and select the `GitHub Actions` source.

Configuration Checklist
- Supply `public/Cybroc.mp4` and confirm it is production ready; swap in a livestream embed if required on the day.
- Update platform URLs and timing details as the ALIFE 2025 schedule is finalized.
- If the site is served from a project sub-path (e.g., `username.github.io/cybroc`), set a `basePath` in `next.config.mjs` or configure a custom domain (e.g., `cybroc.fun`).

Attribution
- Source material: [reality.design/project/cybroc](https://reality.design/project/cybroc) and [kehuang.org/cybroc](http://kehuang.org/cybroc).
