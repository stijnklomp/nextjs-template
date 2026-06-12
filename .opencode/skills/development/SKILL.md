---
name: development
description: MUST USE when building, running, linting, or deploying this Next.js + Bun project. Provides project-specific context for Docker Compose workflows, environment configuration, and code quality tools. All execution defaults to Docker Compose; host-level execution is a last resort.
---

# Project Development

This skill describes the development workflow, commands, and tooling for this Next.js + Bun project.

## Philosophy

**Docker Compose is the primary development environment.** All commands should be run inside containers via Docker Compose profiles. The host should only be used as a last resort when no Docker configuration exists in the project.

## Prerequisites

- Docker & Docker Compose
- Bun (only needed if running outside containers — avoid this)

## Installation

Inside a Docker Compose container:

```bash
docker compose --profile dev run --rm dev bun install --frozen-lockfile
```

## Environment Configuration

| File               | Purpose                    |
| ------------------ | -------------------------- |
| `.env.development` | Local development defaults |

Key environment variables:

```bash
# App
API_PORT=3000
NODE_ENV=development

# Database (PostgreSQL)
DATABASE_URL="postgresql://dev:admin123@db:5432/nextjs?schema=template"
DATABASE_PORT=5432
DATABASE_DB=nextjs
DATABASE_USERNAME=dev
DATABASE_PASSWORD=admin123

# Queue (RabbitMQ)
RABBIT_HOST=rabbitmq
RABBIT_PORT=5672
RABBIT_USER=guest
RABBIT_PASSWORD=guest
```

## Development Commands

All commands should be run inside a Docker Compose container. The preferred pattern is:

```bash
docker compose --profile <PROFILE> run --rm <SERVICE> <COMMAND>
```

Or, for long-running processes, start the profile and execute commands inside the running container:

```bash
docker compose --profile <PROFILE> up --build -d
docker compose --profile <PROFILE> exec <SERVICE> <COMMAND>
```

### Running the App

**Preferred — Docker Compose:**

```bash
# Development with hot reload (mounts current directory into container)
docker compose --profile dev up --build

# Production build + run (uses the local profile with a built image)
docker compose --profile local up --build
```

**Fallback — only if no Docker configuration exists:**

```bash
# Development with hot reload
bun run dev

# Production build + run
bun run build && bun run start

# Build only (outputs to .next/)
bun run build
```

### Linting & Formatting

Inside a Docker Compose container:

```bash
# Check linting
docker compose --profile dev run --rm dev bun run lint

# Fix linting
docker compose --profile dev run --rm dev bun run lint:fix

# Format with Prettier
docker compose --profile dev run --rm dev bun run format

# TypeScript type checking
docker compose --profile dev run --rm dev bun run typecheck
```

**Fallback:**

```bash
bun run lint
bun run lint:fix
bun run format
bun run typecheck
```

ESLint uses `stijnklomp-linting-formatting-config` with strict TypeScript and React rules. Key custom rules:

- `camelCase` for variables and functions
- `PascalCase` for types/classes
- `UPPER_CASE` allowed for variables
- Leading underscore allowed for unused parameters
- Object literal numeric properties exempt from naming
- React/JSX scope rules are off (Next.js handles this automatically)

### Testing

**This project currently has no test suite configured.** The `package.json` has no test scripts.

If you want to add tests, consider:

- **Bun test runner** (`bun:test`) for unit tests
- **Playwright** for E2E tests (a commented-out service exists in `docker-compose.yml`)

### Documentation

Inside a Docker Compose container:

```bash
# Generate TypeDoc
docker compose --profile dev run --rm dev bun run doc
```

**Fallback:**

```bash
bun run doc
```

This generates TypeDoc documentation into `docs/code/` from the `src/` directory.

### Database

The project includes PostgreSQL and a `db-migration` service in Docker Compose, but **no ORM is configured yet**. The migration script (`scripts/dockerComposeMigrate.sh`) is a placeholder:

```bash
# The migration script runs automatically when using Docker Compose profiles
# It waits for PostgreSQL and then runs a placeholder command
```

If you add Prisma or another ORM later, update the migration script.

## Docker Compose Workflows

**Docker Compose is the primary execution environment.** The project includes Docker Compose with profiles. All development and build operations should use these profiles.

### Profiles

| Profile | Services                          | Purpose                                |
| ------- | --------------------------------- | -------------------------------------- |
| `dev`   | dev, db, rabbitmq, db-migration   | Local development with hot reload      |
| `local` | local, db, rabbitmq, db-migration | Build and run production image locally |

### Start Development Environment

```bash
docker compose --profile dev up --build
```

This mounts the current directory into the container and runs `bun run dev`.

To run subsequent commands inside the already-running container:

```bash
docker compose --profile dev exec dev <COMMAND>
```

### Services in Docker Compose

- `db` — PostgreSQL with healthcheck
- `rabbitmq` — RabbitMQ with healthcheck (management UI at `http://localhost:15672`)
- `db-migration` — Runs placeholder migration script after DB is healthy
- `dev` / `local` — The Next.js app

## Build Configuration

### TypeScript Config (`tsconfig.json`)

- `target`: ES2017
- `module`: ESNext
- `moduleResolution`: Bundler
- `jsx`: react-jsx
- `incremental`: true
- `strict`: true + `noUncheckedIndexedAccess`
- `noUnusedLocals`: true
- `noUnusedParameters`: true
- `allowImportingTsExtensions`: true
- `verbatimModuleSyntax`: true
- `noEmit`: true
- Import aliases: `@/*` → `src/*`
- Next.js TypeScript plugin enabled

### Next.js Config (`next.config.mjs`)

```javascript
const nextConfig = {
	output: "standalone",
	experimental: {
		optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
	},
}
```

- Outputs standalone build for Docker deployment
- Optimizes Mantine package imports for faster builds

### PostCSS Config (`postcss.config.cjs`)

```javascript
module.exports = {
	plugins: {
		"postcss-preset-mantine": {},
		"postcss-simple-vars": {
			variables: {
				"mantine-breakpoint-xs": "36em",
				"mantine-breakpoint-sm": "48em",
				"mantine-breakpoint-md": "62em",
				"mantine-breakpoint-lg": "75em",
				"mantine-breakpoint-xl": "88em",
			},
		},
	},
}
```

### Dockerfile

Multi-stage build:

1. **deps** — Install dependencies with lockfile
2. **builder** — Build the Next.js app
3. **runner** — Copy only `.next/standalone`, `.next/static`, and `public`; run `bun server.js`

**Always prefer building via Docker Compose profiles** (`dev` or `local`) over running `docker build` directly, as the profiles handle the full service stack (database, etc.).

## Git Hooks (Husky)

Pre-commit runs `lint-staged` with `.lintstagedrc.json`:

```json
{
	"*.{js,cjs,mjs,ts,tsx,json,yml,yaml}": ["prettier --write"]
}
```

All staged JS/TS/TSX/JSON/YAML files are auto-formatted with Prettier on commit.

## Troubleshooting

### "RabbitMQ connection refused"

- The RabbitMQ service is available via Docker Compose but not yet wired in the application code
- Management UI is at `http://localhost:15672`

### "DATABASE_URL environment variable is not defined"

- Ensure `.env.development` exists and is loaded
- The Docker Compose services set `DATABASE_URL` automatically

### Bun lockfile out of sync

- Inside Docker: Delete `bun.lock` and run `docker compose --profile dev run --rm dev bun install --frozen-lockfile`
- Fallback: Delete `bun.lock` and run `bun install --frozen-lockfile`
- Or just run `bun install` to update the lockfile

### Linting fails after editing JSON files

- Inside Docker: `docker compose --profile dev run --rm dev bun run lint:fix`
- Fallback: `bun run lint:fix`

### TypeDoc generation fails

- Inside Docker: `docker compose --profile dev run --rm dev bun run doc`
- Fallback: `bun run doc`
- Check that `typedoc.config.js` is excluded from `tsconfig.json`
