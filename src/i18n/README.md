# i18n directory

Internationalization configuration for next-intl — locale routing, message loading, and navigation utilities.

## Structure

- **`routing.ts`** — Locale definitions (`en`, `nl`), default locale, and prefix mode
- **`request.ts`** — Request-scoped config that loads the message file for the current locale
- **`navigation.ts`** — Type-safe `Link`, `usePathname`, `useRouter`, and `redirect` wrappers created via `createNavigation`

## Conventions

- Server components use `getTranslations(namespace)` from `next-intl/server` for async translation lookup
- Client components use `useTranslations(namespace)` from `next-intl`
- Messages are stored as JSON in `messages/{locale}.json` and organized by namespace
- The middleware in `src/middleware.ts` handles locale detection, redirect, and cookie management
