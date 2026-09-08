# Agent Instructions

These instructions apply to the entire repository. Keep changes focused on the requested feature and preserve unrelated user edits.

## Architecture

- Organize feature-specific code under `src/features/<feature>`.
- Put reusable UI, layouts, and shared modal primitives under `src/shared/`.
- Keep external URLs and data access out of presentational components when a service or data module is appropriate.
- Keep UI and animation hooks separate from data or business-logic hooks.
- Prefer small, composable components over large page files.
- Preserve public component APIs unless the requested behavior requires a change.

## Content And Assets

- Keep portfolio project data close to its owning feature in `src/features/projects/`.
- Use stable kebab-case asset names in `public/` and verify every referenced asset exists.
- Do not link assets explicitly marked as `extra-project` unless requested.
- Keep PDF/report links separate from image, video, and embed media entries.
- Use accessible labels, meaningful alt text, keyboard-operable buttons, and descriptive external-link behavior.

## Next.js And TypeScript

- Use App Router conventions and current Next.js 16 APIs.
- Dynamic route `params` and `searchParams` are Promises and must be awaited.
- Use `@import "tailwindcss";` with Tailwind CSS v4; do not use legacy `@tailwind` directives.
- Keep client components limited to interactive surfaces.
- Avoid `any`; model data with explicit types and discriminated unions where useful.

## Validation

- Run `npm.cmd run build` after code changes; this is the repository's available validation command.
- Inspect relevant diagnostics after edits.
- When changing asset mappings, verify referenced files exist under `public/`.
- Do not commit, create branches, reset files, or discard user changes unless explicitly requested.