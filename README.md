# Daniel George — Portfolio

A minimal developer portfolio built with SvelteKit and TypeScript. Black background, white text, Inter.

## Developing

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
npm run preview
```

The site uses `@sveltejs/adapter-static` and prerenders every route, so the contents of `build/` can be deployed to any static host.

## Deployment

Pushes to `main` are built and published to GitHub Pages by `.github/workflows/deploy.yml`.

The site is served from the root of `https://othema.github.io/`, so no base path is configured. Pages must be set to **Source: GitHub Actions** in the repository settings.

## Structure

```
src/
├── app.css                  # Global styles, colour tokens, typography
├── lib/
│   ├── config.ts            # Name, description, social links and CV
│   ├── components/          # Meta tags and social icons
│   └── data/projects.ts     # Projects shown on /projects
└── routes/
    ├── +layout.svelte       # Header, nav, footer
    ├── +page.svelte         # Home
    └── projects/+page.svelte
```

## TODO

- Edit, reorder or add projects in `src/lib/data/projects.ts`.
