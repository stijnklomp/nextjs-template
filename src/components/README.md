# Components directory

Reusable UI components organized by domain and specificity. Components are co-located with their CSS Modules for encapsulation.

## Structure

- **`ui/`** — Primitive, reusable UI components (buttons, inputs, toggles, etc.)

## Conventions

- Each component lives in its own directory with an `index.tsx` and a co-located `styles.module.css`
- Default to Server Components; add `"use client"` only when the component needs interactivity (hooks, event handlers, browser APIs)
- Export named components — prefer named exports over default exports for better tree-shaking and refactoring
