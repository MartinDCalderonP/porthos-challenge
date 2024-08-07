## Architecture

This project is a simple React application that uses Vite as a build tool. It uses TypeScript for type checking and ESLint for linting.

The project is structured as follows:

- `src/`: Contains the source code for the application.
  - `components/`: Contains the React components.
  - `App.tsx`: The main application component.
  - `index.tsx`: The entry point for the application.

- `vite.config.ts`: The configuration file for Vite.
- `tsconfig.json`: The configuration file for TypeScript.
- `.eslintrc.js`: The configuration file for ESLint.

# Design Decisions

- **Vite**: Vite is a fast build tool that provides a great development experience. It is easy to set up and has built-in support for React and TypeScript.

- **React**: React is a popular library for building user interfaces. It provides a component-based architecture that makes it easy to build complex UIs.

- **TypeScript**: TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors at compile time and provides better tooling support.

- **ESLint**: ESLint is a pluggable linting utility for JavaScript and JSX. It helps enforce coding standards and catch common errors.

- **Prettier**: Prettier is an opinionated code formatter that helps keep the codebase consistent and readable.

- **pnpm**: pnpm is a fast, disk-space efficient package manager that helps manage dependencies in a project.

- **CSS Modules**: CSS Modules are a way to scope CSS locally by default. This helps avoid naming conflicts and makes it easier to maintain styles.

# How to use this project

## Install dependencies

pnpm install

## Run the project

pnpm dev

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
