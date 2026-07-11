---
name: testing
description: MUST USE when writing, running, or debugging tests in this Next.js + Bun project. The project currently has no test suite, but this skill covers what testing would look like if added.
---

# Project Testing

This skill describes the testing state of this Next.js + Bun project.

## Current State

**This project currently has no test suite configured.**

The `package.json` has no test scripts:

- No `test`, `test:unit`, `test:feature`, or `test:acceptance` scripts
- No test framework dependencies (no `bun:test` is used yet, though Bun has it built-in)
- No `test/` directory exists

## Recommended Testing Strategy (If Adding)

If you want to add tests, here is the recommended approach:

### Test Organization — Separation of Concerns

Tests should be **co-located** with the source file they test, with two categories distinguished by file extension:

| Extension | Category | What it tests |
|-----------|----------|---------------|
| `*.test.ts` | Business logic | Functions, hooks, utilities, API route handlers — no JSX rendering |
| `*.test.tsx` | UI / elements | Component rendering, user interactions, visual states |

This maps naturally: business logic never imports JSX (`.ts`), while UI tests always render components (`.tsx`).

### 1. Unit / Business Logic Tests (`*.test.ts`)

Use Bun's built-in test runner (`bun:test`):

```typescript
import { describe, test, expect } from "bun:test"

describe("Theme utilities", () => {
	test("should toggle theme", () => {
		// Test theme toggle logic
	})
})
```

### 2. UI / Element Tests (`*.test.tsx`)

For React component testing, use **Testing Library** (`@testing-library/react`):

```typescript
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
```

### 3. E2E Tests

A Playwright service is commented out in `docker-compose.yml`. To enable it:

1. Uncomment the `playwright` service in `docker-compose.yml`
2. Add Playwright as a dev dependency:
    ```bash
    bun add --dev @playwright/test
    ```
3. Create `playwright.config.ts`

Run Playwright inside Docker:

```bash
docker compose --profile dev exec playwright npx playwright test
```

## Code Coverage (If Adding Tests)

If tests are added, configure coverage in `bunfig.toml`:

```toml
[test]
coverageDir = "test/coverage"
coverageSkipTestFiles = true
coverageThreshold = 1
coveragePathIgnorePatterns = [
  "test/**",
  ".next/**",
  "src/app/**",
]
```

## Important Rules

1. **This project currently has no tests** — do not reference test scripts, test directories, or test utilities that don't exist
2. **If adding tests**, create the test infrastructure first (scripts, directories, config) before writing test files
3. **Do not write test files** for this project unless the user explicitly asks for tests to be added
4. **Run `bun run lint:fix` after writing tests** to auto-fix any lint issues before committing. Prefer this over manual fixes.
