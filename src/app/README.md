# App directory

Contains the Next.js App Router pages, layouts, and special files. Each subdirectory corresponds to a route segment.

## Special files

- **`layout.tsx`** — Root layout wrapping the entire application (Server Component)
- **`page.tsx`** — Home page route
- **`error.tsx`** — Client-side error boundary for the root route
- **`loading.tsx`** — Suspense fallback shown during page loading
- **`not-found.tsx`** — 404 page for unmatched routes
- **`global-error.tsx`** — Error boundary that catches errors above the root layout
- **`globals.css`** — Global styles, CSS custom properties (design tokens), and base element resets

## Route groups

Use parentheses `(group)` to organize routes without affecting the URL path. Use parallel routes with `@slot` for complex multi-panel layouts.
