---
name: architecture
description: MUST USE when working with this Next.js + Bun + Mantine project. Understands the Next.js App Router conventions, file organization, Mantine component patterns, and code conventions. Use when reading, writing, or modifying any source code in this project.
---

# Project Architecture

This skill describes the architecture, patterns, and conventions used in this Next.js + Bun + Mantine project.

## Tech Stack

- **Runtime**: Bun
- **Framework**: Next.js with App Router
- **Language**: TypeScript (strict mode, ES2017, Bundler module resolution)
- **UI Library**: Mantine with PostCSS-based styling
- **Styling**: PostCSS with `postcss-preset-mantine` and `postcss-simple-vars`
- **Queue**: RabbitMQ (available via Docker Compose, not yet wired in code)
- **Database**: PostgreSQL (available via Docker Compose, no ORM configured yet)

## Directory Structure

The project follows Next.js App Router conventions:

| Directory         | Purpose                                                                             |
| ----------------- | ----------------------------------------------------------------------------------- |
| `src/app/`        | Next.js App Router pages and layouts (root layout, page, error, loading, not-found) |
| `src/components/` | React components (UI components, reusable parts)                                    |
| `src/lib/`        | Library code: theme system, utilities, shared logic                                 |
| `public/`         | Static assets (images, fonts, SVGs)                                                 |

### Key Files

- `src/app/layout.tsx` — Root layout with Mantine theme provider
- `src/app/page.tsx` — Home page
- `src/app/error.tsx` — Error boundary
- `src/app/global-error.tsx` — Global error boundary
- `src/app/loading.tsx` — Loading state
- `src/app/not-found.tsx` — 404 page
- `src/app/globals.css` — Global styles
- `src/lib/theme/` — Theme system (context, provider, hook, types)
- `src/lib/utils.ts` — Utility functions (currently empty)
- `src/components/ui/theme-toggle/` — Theme toggle UI component

## Path Aliases

Use `@/*` for imports. Do NOT use relative paths (e.g., `../../lib/theme`):

- `@/*` → `src/*`

Configured in `tsconfig.json` paths and `bunfig.toml` resolve alias.

## Next.js App Router Conventions

### Server Components vs Client Components

- **Server Components** (default): Run on the server. Can access the file system, database, etc. No `'use client'` directive.
- **Client Components**: Must add `'use client'` at the top of the file. Required for:
    - React hooks (`useState`, `useEffect`, `useContext`)
    - Browser APIs (`localStorage`, `window`)
    - Event handlers (`onClick`, `onSubmit`)
    - Mantine components that require client-side rendering

### Theming with Mantine

The theme system uses a custom React context with PostCSS-based dark/light mode:

- `src/lib/theme/context.ts` — React context for theme state
- `src/lib/theme/provider.tsx` — Theme provider component (wraps children with context)
- `src/lib/theme/use-theme.ts` — Hook to consume theme context
- `src/lib/theme/types.ts` — Theme types (`TTheme`, `TThemeModel`, etc.)

The theme is currently hardcoded to `dark` mode in `ThemeModel`. The `theme-toggle` component can be used to switch modes.

### Layout Pattern

Root layout (`src/app/layout.tsx`):

- Imports `@mantine/core/styles.css` for base Mantine styles
- Imports `globals.css` for custom styles
- Wraps children with `ThemeProvider`

## Error Handling

Next.js App Router provides error boundaries via `error.tsx` and `global-error.tsx`:

- `error.tsx` — Catches errors in the route segment
- `global-error.tsx` — Catches errors globally (must be a Client Component)

## PostCSS Configuration

PostCSS is configured in `postcss.config.cjs`:

- `postcss-preset-mantine` — Mantine's PostCSS preset
- `postcss-simple-vars` — CSS variables for Mantine breakpoints

## Adding a New Page

Follow this order when adding a new page:

1. **Create the page** — Add `src/app/<route>/page.tsx`
2. **Add layout** (if needed) — Add `src/app/<route>/layout.tsx`
3. **Add loading state** (if needed) — Add `src/app/<route>/loading.tsx`
4. **Add error boundary** (if needed) — Add `src/app/<route>/error.tsx`
5. **Add components** — Create components in `src/components/` if reusable
6. **Add styles** — Use Mantine components or add CSS modules

## Adding a New Component

1. Create the component in `src/components/<category>/<component-name>/index.tsx`
2. Use Mantine components where appropriate
3. Add `'use client'` if the component needs client-side features
4. Use TypeScript types and export props interface

## Important Conventions

1. **Always use `@/*` imports** — Never use relative paths
2. **Use Mantine components** — Prefer Mantine over raw HTML for consistency
3. **Keep server components default** — Only add `'use client'` when necessary
4. **Type all props** — Use TypeScript interfaces for component props
5. **Use `T` prefix for type aliases** — e.g., `TTheme`, `TThemeModel`
6. **Export from `index.ts`** — Re-export from `src/lib/<module>/index.ts` for clean imports
