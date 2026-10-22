# Changelog

## 4.0.0-alpha.0

### Breaking changes

- Migrated from legacy eslintrc to ESLint 10 flat config
- Requires Node.js `^22.13.0 || >=24` and ESLint `^10.4.0`
- Consumer projects must use `eslint.config.js` instead of `.eslintrc`
- Removed `eslint-plugin-flowtype` and the `@byndyusoft/eslint-config/flow` entry point
- Removed the `@byndyusoft/eslint-config/stylistic` entry point (ESLint core stylistic rules were removed in ESLint 9)
- Public imports are the extensionless root entry points listed in README; `configs/`, `utils/`, and `.js` subpaths are no longer supported

### Updated dependencies

- `eslint` 8 → 10
- `typescript-eslint` 7 → 8
- `eslint-plugin-sonarjs` 1 → 4
- `eslint-plugin-jest` 28 → 29
- `eslint-plugin-react-hooks` 4 → 7
- `eslint-plugin-testing-library` 6 → 7
- `eslint-plugin-unicorn` 54 → 65
- `eslint-plugin-n` 17 → 18
- Replaced `eslint-plugin-import` with `eslint-plugin-import-x`
- Replaced `eslint-plugin-react` with `@eslint-react/eslint-plugin`
- Replaced `eslint-plugin-jsx-a11y` with `eslint-plugin-react-a11y`
- Replaced `eslint-plugin-header` with `@tony.ganchev/eslint-plugin-header`
- And other minor dependency updates

### Rule changes

- `@typescript-eslint/no-throw-literal` → `@typescript-eslint/only-throw-error`
- `@typescript-eslint/no-empty-interface` → `@typescript-eslint/no-empty-object-type`
- `plugin:sonarjs/recommended-legacy` → `plugin:sonarjs/recommended`
- Removed ESLint core rules dropped in ESLint 9+ from internal configs
- Removed `import/no-unused-modules`, which does not work with flat config
- Changed import, React, and accessibility rule namespaces to match the new plugins
- The React preset now uses `@eslint-react` recommended rules; old `react/*` overrides without equivalents are no longer enforced

### Added

- Composable `vitest` preset using `@vitest/eslint-plugin` recommended rules and custom settings matching the Jest preset
- Smoke tests for `backend` and `frontend` presets
- Package archive consumer check and Node.js 22/24 CI
- Explicit exports for the composable `advanced`, `node`, `jest`, `jest-style-frontend`, `react`, `react-testing`, and TypeScript style presets
- Migration guide in README

### Legacy plugins

- `eslint-plugin-dirs` — kept (works via `@eslint/compat`)
- `eslint-plugin-jest-formatting` — kept (works via `@eslint/compat`)

## 3.0.1

Previous release using ESLint 8 eslintrc format.
