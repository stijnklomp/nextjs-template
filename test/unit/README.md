# Unit tests

Isolated tests for individual components, utilities, and modules. External dependencies (network, filesystem, browser APIs) are mocked.

## Conventions

- Each component or module gets its own `.test.tsx` or `.test.ts` file co-located by domain under `test/unit/`
- Use `@testing-library/react` for component rendering and interaction
- Use `@testing-library/jest-dom` for DOM assertion matchers
- Mock external modules with Jest's `jest.mock()` or `jest.spyOn()`
- Prefer testing behaviour (user-visible outcomes) over implementation details
