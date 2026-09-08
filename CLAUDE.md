# Project Context

## Stack
- Next.js 16.3.4 with App Router
- React 19 and TypeScript
- Tailwind CSS v4
- PostCSS via `postcss.config.mjs`

## Commands

```text
npm.cmd run dev
npm.cmd run build
npm.cmd run start
```

There is currently no lint script in `package.json`; use the production build and editor diagnostics for validation unless a lint script is added.

## Structure

- `src/app/`: routes, page composition, global styles
- `src/features/canvas/`: workshop canvas and hotspot interactions
- `src/features/projects/`: project database and project modal
- `src/shared/components/`: navigation, shared modal shell, About, and Contact surfaces
- `public/`: stable portfolio media and documents

## Framework Rules

- In Next.js 16 dynamic routes, type `params` and `searchParams` as Promises and await them before use.
- In Tailwind v4, use `@import "tailwindcss";` rather than legacy `@tailwind` directives.
- Use client components only where state, events, or browser APIs are required.
- Preserve stable canvas coordinates when changing surrounding UI scale or browser-zoom compensation.

## Visual Language

Refer to `DESIGN.md` for the design reference. The intended direction is a warm Blueprint Workshop with pixel-art imagery, structural borders, terminal-style labels, and readable editorial project content.
- **Aesthetic:** A "Blueprint Workshop". Retro, structural, pixelated, but warm and editorial (not overly grainy). 
- **Colors:** Warm Sand (`#E1CFAB`) base, Muted Navy (`#536387`) grid lines/borders, Pale Cream (`#F2E9CD`) accents.
- **UI Elements:** Use thick, solid borders (2px-4px) for modals and structural elements. Use terminal brackets `[ ]` for text labels.
- **Canvas/Interactive Layer:** Use CSS-based custom dithering (`linear-gradient` / `radial-gradient`) and halftone dot-matrix patterns instead of heavy raster images for background dimming and transitions. 

## Working Agreement

- Keep edits minimal and localized.
- Do not overwrite unrelated user changes.
- Use explicit TypeScript types and accessible interactive elements.
- Verify asset URLs after renaming or remapping files.
- Run `npm.cmd run build` before reporting completion.