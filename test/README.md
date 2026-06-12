# Test directory

Tests are organized by level: unit, feature, and e2e. The structure follows the fastify-template conventions adapted for a Next.js + Mantine UI project.

## Levels

| Level | Directory | Runner | Description |
|-------|-----------|--------|-------------|
| Unit | Colocated in `src/` | Jest + RTL | Isolated component and utility tests with mocked dependencies |
| Feature | `test/feature/` | Jest | Integration tests exercising full request/response flows |
| E2E | `test/e2e/` | Playwright | Browser-based tests against a running application |

## Running tests

```sh
# All unit and feature tests
bun run test

# Unit tests only
bun run test:unit

# Unit tests with coverage
bun run test:coverage

# Feature tests only
bun run test:feature

# E2E tests (requires app running)
bun run test:e2e
```
