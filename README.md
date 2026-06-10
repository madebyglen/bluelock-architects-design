# Madebyglen — Architecture Portfolio

An editorial, monograph-style portfolio site for an architecture practice.
Built with **TanStack Start** (React 19 + Vite 7) and **Tailwind CSS v4**, in TypeScript.

## Pages

- `/` — Home / hero introduction
- `/about` — Biography and practice history
- `/projects` — Selected works (monograph)
- `/contact` — Contact form & details

## Requirements

- Node.js **>= 20.19** (Vite 7 requires Node 20.19+ or 22.12+)
- npm 10+ (or pnpm / yarn / bun — all work)

Check with:

```bash
node -v
npm -v
```

## Getting started (after cloning)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The dev server prints the local URL (typically <http://localhost:3000>).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format all files with Prettier |

## Tech stack

- **Framework:** TanStack Start v1 (file-based routing in `src/routes/`)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui (Radix primitives)
- **Build:** Vite 7
- **Language:** TypeScript (strict)

## Project structure

```
src/
  assets/            Images (hero, portrait, project plates)
  components/        SiteNav, SiteFooter, and shadcn/ui primitives
  lib/               Shared utilities and the projects dataset
  routes/            File-based routes (__root, index, about, projects, contact)
  styles.css         Tailwind v4 entry + design tokens
```

## Customizing

- **Project list:** edit `src/lib/projects.ts` and drop new images into `src/assets/`.
- **Colors / typography:** edit the `@theme` tokens in `src/styles.css`.
- **Site copy:** edit the route files in `src/routes/`.

## Troubleshooting

- *"Engine not supported" on install:* upgrade Node to 20.19+ or 22.12+.
- *Port already in use:* run `npm run dev -- --port 5173` to pick another port.
- *Stale types after adding a route:* TanStack Router regenerates `src/routeTree.gen.ts` automatically when the dev server is running.
