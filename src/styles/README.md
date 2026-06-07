# Styles directory

Shared SCSS partials, variables, mixins, and design tokens that are used across the application. This directory centralizes reusable styles to keep component styling consistent and reduce duplication.

## Structure

- **`_variables.scss`** — Design tokens (colors, spacing, typography, breakpoints, z-index)
- **`_mixins.scss`** — Reusable SCSS mixins (responsive queries, patterns, vendor prefixes)
- **`_typography.scss`** — Typography scale, font-family stacks, text utilities
- **`_animations.scss`** — Keyframe definitions and transition presets

## Conventions

- Partials are prefixed with `_` and imported via `@use` in `globals.scss` or component `styles.module.scss` files
- Avoid side-effectful SCSS (output without `@use`); keep partials focused on variables, mixins, and functions
- Use SCSS variables for values that are computed or derived; use CSS custom properties (`var(--color-*)`) for values that change at runtime (e.g., theme switching)
- A component's `.module.scss` should import only the specific partials it needs rather than a single barrel file
