# Messages directory

Translation files for the next-intl internationalization system. Each locale has its own JSON file containing all translatable strings organized by namespace.

## Structure

- **`en.json`** — English translations (default locale)
- **`nl.json`** — Dutch translations

## Conventions

- Keys are organized by namespace (e.g., `home`, `showcase`, `locale`) matching the structure used in `getTranslations()` and `useTranslations()`
- Add a new `{locale}.json` file for each additional language, then register the locale in `src/i18n/routing.ts`
