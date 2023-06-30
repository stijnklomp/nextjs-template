# NPM package template

![GitHub](https://img.shields.io/github/license/stijnklomp/package-template?style=flat)

A template project for a Node.js npm package.

### Changes suggested to create a package

- In `package.json`: Replace the name, description and repo URL
- Delete and regenerate `package-lock.json`
- Replace/Update `README.md` with a readme about the project

### Developer notes

The TypeScript or Babel transpilers will automatically bundle exports into a module.exports and then generate a `.default` reference for you when importing, however native NodeJS will not. This means if you are not using a transpiler, you may need to use a `.default` reference.

```javascript
import Shape from './Shape.js'

const shape = new Shape.default()
```