# Next.js template

<p align="center">This project template serves as a starting point for building efficient and scalable web applications with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, and best practices in place. It comes pre-configured with essential tools to ensure code quality, maintainability, and a streamlined development workflow.</p>
<p align="center">
<img src="https://img.shields.io/github/license/stijnklomp/nextjs-template?style=flat" alt="Package License" />
</p>

## Features

- Next.js: The React framework for production with server-side rendering and static site generation.
- TypeScript: Static typing with TypeScript, enhancing code quality and developer productivity.
- Mantine: React components library with PostCSS-based styling and dark/light mode theming.
- Prettier & ESLint: Automatic code formatting and linting for consistent code style and adherence to best practices.
- Bun: Runtime environment, bundler and unit, feature, and acceptance tests.
- Husky: Git hooks for running linting and tests before commits, ensuring code quality standards are met.
- TypeDoc: Automatic generation of TypeScript documentation for improved code clarity and collaboration.
- i18n: Internationalization with next-intl, including locale detection, message files, and a locale switcher.
- Tabler Icons: Over 5,000 open-source icons integrated with Mantine.
- Motion: Declarative animations powered by the Motion library.

## Installation

```sh
bun install --frozen-lockfile
```

## Running the app

```sh
# Development in watch mode
bun run dev

# Production mode
bun run build && bun run start
```

### With Docker

```sh
docker build -t nextjs-template . && docker run --rm -p 3000:3000 nextjs-template
```

### With Docker Compose

```sh
# There are multiple profiles that can be run:
# dev -> Mounts the current directory to the container and runs the service in watch mode
# local -> Builds and runs the application image from the current code
docker compose --profile <PROFILE> up --build
```

#### Database

A PostgreSQL database is available via Docker Compose. Database migrations run automatically via the `db-migration` service when using any Docker Compose profile.

#### RabbitMQ

A RabbitMQ service is available via Docker Compose for message queue capabilities. The management UI is accessible at `http://localhost:15672`.

## Test

### Lint

ESLint is used as a linter and uses Prettier to format code.

```sh
# ESLint
bun run lint

# ESLint and fix (also sorts JSON files)
# Prefix with `EXCLUDE_PATHS="<file_1> <file_2>"` to exclude files/directories (using GLOB pattern) from being auto-sorted
bun run lint:fix

# Sort a specific JSON file and/or directory
# Important: Don't run this command without a specified file/directory (using GLOB pattern)
bunx jsonsort "<file_1> <file_2>"
```

### Unit & Feature tests

```sh
# Unit tests
bun run test

# Unit tests with coverage
bun run test:coverage

# Feature tests only
bun run test:feature
```

### E2E tests

```sh
# Requires the application to be running
bun run test:e2e

# With Playwright UI mode
bun run test:e2e:ui
```

### Acceptance tests

```sh
bun run test:acceptance
```

#### With Docker Compose

```sh
# Run once and exit
docker compose --profile test up --build --attach acceptance-once --exit-code-from acceptance-once

# Run multiple times
# There are multiple profiles that can be run for the acceptance tests:
# dev
# local
docker compose --profile <PROFILE> up --build -d && docker compose --profile <PROFILE> exec -ti dev sh -c "bun run test:acceptance"
```

### TypeScript type checking

```sh
bun run typecheck
```

## License

This project is licensed under the MIT License. Feel free to customize and use it for your own projects.
