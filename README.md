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
