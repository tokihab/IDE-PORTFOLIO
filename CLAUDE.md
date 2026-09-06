# Claude System Context: Industrial Design Portfolio

## 1. Tech Stack & Version Rules
- **Framework:** Next.js 16.3.4 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript

## 2. Critical Framework Gotchas (DO NOT HALLUCINATE OLD SYNTAX)
- **Next.js 16+ Dynamic Route Params:** Route `params` and `searchParams` are strictly **Promises**. You cannot destructure them synchronously. You MUST type them as a Promise and `await` them before usage.
  - *Correct:* `export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; }`
  - *Incorrect:* `export default function Page({ params }: { params: { id: string } }) { const { id } = params; }`
- **Tailwind CSS v4:** Do not use `@tailwind base`, `@tailwind components`, or `@tailwind utilities`. You must use `@import "tailwindcss";` in the global CSS file.

## 3. Design System & UI Language
Always reference `DESIGN-SYSTEM.md` for exact hex codes and typography.
- **Aesthetic:** A "Blueprint Workshop". Retro, structural, pixelated, but warm and editorial (not overly grainy). 
- **Colors:** Warm Sand (`#E1CFAB`) base, Muted Navy (`#536387`) grid lines/borders, Pale Cream (`#F2E9CD`) accents.
- **UI Elements:** Use thick, solid borders (2px-4px) for modals and structural elements. Use terminal brackets `[ ]` for text labels.
- **Canvas/Interactive Layer:** Use CSS-based custom dithering (`linear-gradient` / `radial-gradient`) and halftone dot-matrix patterns instead of heavy raster images for background dimming and transitions. 

## 4. General Coding Standards
- Use modern React patterns (Hooks, Server Components where possible, Client Components only when interactivity `useState`/`onClick` is required).
- Always use `devicePixelRatio` when drawing on HTML5 Canvas elements to prevent blurriness on retina displays.