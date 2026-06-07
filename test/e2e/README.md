# E2E tests

Browser-based end-to-end tests using Playwright. These tests verify that the application works correctly in a real browser environment.

## Running

```sh
# Start the app and run tests
bun run test:e2e

# With Playwright UI mode
bun run test:e2e:ui
```

## Conventions

- Test critical user journeys (happy paths)
- Use Playwright's `page` object for browser interactions
- Keep tests independent — each test sets up its own state
- Use data-testid attributes for resilient selectors
