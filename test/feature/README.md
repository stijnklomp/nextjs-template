# Feature tests

Integration tests that exercise full request/response flows through the Next.js application. These tests combine multiple units to verify that features work end-to-end within the Node.js runtime.

## Conventions

- Build the Next.js app via the programmatic API and test via HTTP requests
- External services (database, queue) are mocked at the boundary
- Use Jest for assertions and test structure
