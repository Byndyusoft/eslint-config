# eslint-config

[![NPM version](https://img.shields.io/npm/v/@byndyusoft/eslint-config.svg)](https://www.npmjs.com/package/@byndyusoft/eslint-config)

Shared ESLint flat config for Byndyusoft projects.

## Requirements

- Node.js `^22.13.0 || >=24`
- ESLint `^10.4.0`

## Install

```shell
npm i -D eslint@^10 @byndyusoft/eslint-config@4.0.0-alpha.0
```

For TypeScript projects, also install TypeScript:

```shell
npm i -D typescript
```

React and Jest projects also need their own React and Jest dependencies and type declarations. The presets configure ESLint; they do not install the application framework or test runner for you.

## Usage

Create `eslint.config.js` in your project root if your `package.json` has `"type": "module"`. Otherwise, use `eslint.config.mjs` for the `import` examples below.

### Backend

**Node + TypeScript/JavaScript + Jest**

```js
import backend from '@byndyusoft/eslint-config/backend';

export default backend;
```

**package.json**

```json
{
  "engines": {
    "node": "^22.13.0 || >=24"
  }
}
```

### Frontend

**React + TypeScript/JavaScript + Jest**

```js
import frontend from '@byndyusoft/eslint-config/frontend';

export default frontend;
```

### Public entry points

| Import | Description |
|--------|-------------|
| `@byndyusoft/eslint-config` | Base JavaScript config |
| `@byndyusoft/eslint-config/backend` | Complete Node.js + TypeScript + Jest config |
| `@byndyusoft/eslint-config/frontend` | Complete React + TypeScript config |
| `@byndyusoft/eslint-config/javascript` | Same as default |
| `@byndyusoft/eslint-config/typescript` | JavaScript + TypeScript rules |
| `@byndyusoft/eslint-config/advanced` | SonarJS and Unicorn rules |
| `@byndyusoft/eslint-config/node` | Node.js rules and globals |
| `@byndyusoft/eslint-config/jest` | Jest rules |
| `@byndyusoft/eslint-config/jest-style-frontend` | Frontend Jest style overrides |
| `@byndyusoft/eslint-config/react` | React, hooks, and accessibility rules |
| `@byndyusoft/eslint-config/react-testing` | Testing Library and jest-dom rules |
| `@byndyusoft/eslint-config/typescript-style-backend` | Backend TypeScript style rules |
| `@byndyusoft/eslint-config/typescript-style-frontend` | Frontend TypeScript style overrides |
| `@byndyusoft/eslint-config/header-apache-2.0` | Apache 2.0 license header rule |

Each entry point exports an ESLint flat config array. `backend` and `frontend` are complete presets. The other entries are building blocks: combine them with `defineConfig(...)` in the order needed by your project. For example, `typescript-style-frontend` adds rules to `typescript`, and `jest-style-frontend` adds rules to `jest`; neither style preset is intended to be used alone. Files inside `configs/` and `utils/` are internal and are not public imports.

### Extending a preset

```js
import { defineConfig } from 'eslint/config';
import backend from '@byndyusoft/eslint-config/backend';

export default defineConfig(...backend, {
    rules: {
        'no-console': 'off'
    }
});
```

## Migration from v3

v4 is a **breaking** release. Main changes:

| v3 | v4 |
|----|-----|
| `.eslintrc` + `"extends"` | `eslint.config.js` + `import` |
| ESLint 8.x | ESLint 10.x |
| eslintrc format | flat config only |
| `import/*`, `react/*`, `jsx-a11y/*` rules | `import-x/*`, `@eslint-react/*`, `react-a11y/*` rules |
| `@byndyusoft/eslint-config/flow` | Removed (Flow plugin incompatible with ESLint 10) |
| `@byndyusoft/eslint-config/stylistic` | Removed (ESLint core stylistic rules were removed in ESLint 9) |

Use the extensionless public paths listed above. Deep imports from `configs/` or `utils/` and paths ending in `.js` are no longer supported.

**Before (v3):**

```json
{
  "extends": ["@byndyusoft/eslint-config/backend"]
}
```

**After (v4):**

```js
import backend from '@byndyusoft/eslint-config/backend';

export default backend;
```

Additional steps for consumer projects:

1. Upgrade Node.js to `^22.13.0 || >=24` and ESLint to `^10.4.0`
2. Remove `.eslintrc.*` / `.eslintignore` (migrate ignores into `eslint.config.js`)
3. Update IDE ESLint extension (VS Code ESLint v3+ supports flat config)
4. Run `eslint .` and fix new violations from updated plugins (typescript-eslint 8, unicorn 65+, sonarjs 4)

## Maintainers

- [@Byndyusoft/owners](https://github.com/orgs/Byndyusoft/teams/owners) <<github.maintain@byndyusoft.com>>
- [@Byndyusoft/team](https://github.com/orgs/Byndyusoft/teams/team)
- [@KillWolfVlad](https://github.com/KillWolfVlad)
- [@sadcitizen](https://github.com/sadcitizen)
