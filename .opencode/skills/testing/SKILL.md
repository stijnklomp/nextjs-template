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

### 1. Unit Tests

Use Bun's built-in test runner (`bun:test`):

```typescript
import { describe, test, expect } from "bun:test"

describe("Theme utilities", () => {
	test("should toggle theme", () => {
		// Test theme toggle logic
	})
})
```

### 2. E2E Tests

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

### 3. Component Tests

For React component testing, consider:

- **Testing Library** (`@testing-library/react`) with Bun test runner
- Or **Storybook** for visual component testing

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
