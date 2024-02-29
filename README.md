# Next.js template

<p align="center">This project template serves as a starting point for building web applications with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, and best practices in place. It comes pre-configured with essential tools to ensure code quality, maintainability, and a streamlined development workflow.</p>
<p align="center">
<img src="https://img.shields.io/github/license/stijnklomp/nextjs-template?style=flat" alt="Package License" />
</p>

## Features

- Next.js: A powerful React framework for building server-rendered and statically generated web applications.
- TypeScript: Static typing with TypeScript, enhancing code quality and developer productivity.
- Prettier & ESLint: Automatic code formatting and linting for consistent code style and adherence to best practices.
- Jest: Unit testing framework for ensuring code quality and functionality.
- Playwright: End-to-end testing framework for comprehensive testing of user interactions and browser behavior.
- SASS/SCSS:  Powerful styling capabilities with variables, mixins, nesting, and more.
- Husky: Git hooks for running linting and tests before commits, ensuring code quality standards are met.
- TypeDoc: Automatic generation of TypeScript documentation for improved code clarity and collaboration.

## Installation

```sh
npm ci
```

### Running

```sh
# development
npm run dev

# production mode
npm run build && npm run start
```

> http://localhost:3000/

## Testing

### Unit tests

Unit tests are written and executed in [Jest](https://jestjs.io/).

##### Run unit tests

```bash
npm run test
```

### End-to-end tests

End-to-end tests are executed with [Playwright](https://playwright.dev/) and runs in headless mode by default.

##### Run e2e tests

```sh
npm run test:e2e
```

## Developer Notes

- Prettier will automatically format any staged files when running `git commit`\
To avoid the pre-commit hook from running you can specify `-n` when running git commit.

# Licensing

This project is licensed under the MIT License. Feel free to customize and use it for your own projects.