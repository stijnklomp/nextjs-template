# UI directory

Primitive, reusable UI components that form the application's component library. These are generic enough to be used across multiple features and pages.

## Conventions

- Each component has its own directory with an `index.tsx` entry point and a co-located `styles.module.css`
- Components use CSS custom properties (`var(--color-*)`) from `globals.css` to inherit the current theme
- Mantine components can be composed alongside custom components — wrap Mantine components in a custom component when adding project-specific logic or styling
