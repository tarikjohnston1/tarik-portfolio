# Tarik Johnston — Portfolio

Personal portfolio built with React and esbuild.

## Run locally

Install Node.js, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3003. Restart the server after editing to rebuild the site.

## Build

```sh
npm run build
```

The complete static website is generated in `dist/`.

## Editing

- `src/main.jsx`: page layouts and components
- `src/style.css`: styling
- `src/imported-cases.json`: recent case studies
- `src/additional-cases.json`: earlier case studies
- `public/assets`: portfolio images
- `AGENTS.md`: writing preferences

## GitHub Pages

In repository Settings → Pages, choose GitHub Actions. The included workflow builds and publishes `dist/` when changes are pushed to `main`, or when started manually in Actions.

The workflow detects the Pages base path, so links and images work at `/tarik-portfolio/` and at a custom domain. Local builds continue to use `/`.

Changes stay local until Tarik explicitly asks to push them.
