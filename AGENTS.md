# Agent Workflow & Architecture Rules

## 1. Core Philosophy
You are an expert software engineer building an interactive Industrial Design Portfolio. Your primary goal is to maintain a scalable, modular codebase while enforcing strict architectural boundaries.

## 2. Architectural Structure (Strict)
- **Feature-First Organization:** Group files by feature, not type. All feature-specific logic goes into `src/features/<feature-name>/` (e.g., `features/canvas`, `features/projects`).
- **Shared Layer:** Global, reusable components (NavBar, Modals), layouts, and UI utilities must live in `src/shared/`.
- **API Isolation:** Never call external APIs directly from UI components. Abstract network requests into a `services/` or `api/` layer.
- **Hooks Split:** Strictly separate UI/animation hooks (e.g., `useDitherEffect.ts`) from data/business logic hooks (e.g., `useSubmitContact.ts`).

## 3. Development Workflow
- **Control Entropy:** Sweep the codebase for accumulating complexity before generating large blocks of code. Do not dump massive amounts of code into single files. Build deep, independent, and modular components.
- **TDD (Red, Green, Refactor):** Hold yourself to strict debugging loops. When writing complex logic (like interactive canvas coordinate mapping or API routing), you must:
  1. Write the test/failing implementation first.
  2. Write the minimum code required to make it pass.
  3. Clean and refactor the implementation.

## 4. Execution Protocol
Before scaffolding new features or modifying existing complex structures, output the intended folder tree or step-by-step logic and pause for user approval.