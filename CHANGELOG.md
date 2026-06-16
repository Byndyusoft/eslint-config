# Changelog

## 4.0.0

### Breaking changes

- Migrated from legacy eslintrc to ESLint 10 flat config
- Requires Node.js `>=20.19.0` and ESLint `>=10.4.0`
- Consumer projects must use `eslint.config.js` instead of `.eslintrc`
- Removed `eslint-plugin-flowtype` and deprecated `@byndyusoft/eslint-config/flow`
- Deprecated `@byndyusoft/eslint-config/stylistic` (ESLint core stylistic rules removed in ESLint 9+)

### Updated dependencies

- `eslint` 8 → 10
- `typescript-eslint` 7 → 8
- `eslint-plugin-sonarjs` 1 → 4
- `eslint-plugin-jest` 28 → 29
- `eslint-plugin-react-hooks` 4 → 7
- `eslint-plugin-testing-library` 6 → 7
- `eslint-plugin-unicorn` 54 → 65 (supports Node 20; v67+ requires Node 22)
- `eslint-plugin-n` 17 → 18
- And other minor dependency updates

### Rule changes

- `@typescript-eslint/no-throw-literal` → `@typescript-eslint/only-throw-error`
- `@typescript-eslint/no-empty-interface` → `@typescript-eslint/no-empty-object-type`
- `plugin:sonarjs/recommended-legacy` → `plugin:sonarjs/recommended`
- Removed ESLint core rules dropped in ESLint 9+ from internal configs

### Added

- Smoke tests for `backend` and `frontend` presets
- Migration guide in README

### Legacy plugins

- `eslint-plugin-dirs` — kept (works via `@eslint/compat`)
- `eslint-plugin-jest-formatting` — kept (works via `@eslint/compat`)
- `eslint-plugin-header` — kept for `@byndyusoft/eslint-config/header-apache-2.0`

## 3.0.1

Previous release using ESLint 8 eslintrc format.
