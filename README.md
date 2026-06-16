# eslint-config

[![NPM version](https://img.shields.io/npm/v/@byndyusoft/eslint-config.svg)](https://www.npmjs.com/package/@byndyusoft/eslint-config)

Shared ESLint flat config for Byndyusoft projects.

## Requirements

- Node.js `>=20.19.0`
- ESLint `>=10.4.0`

## Install

```shell
npm i -D eslint@^10 @byndyusoft/eslint-config
```

For TypeScript projects, also install TypeScript:

```shell
npm i -D typescript
```

## Usage

Create `eslint.config.js` in your project root.

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
    "node": ">=20.19.0"
  }
}
```

### Frontend

**React + TypeScript/JavaScript + Jest**

```js
import frontend from '@byndyusoft/eslint-config/frontend';

export default frontend;
```

### Other entry points

| Import | Description |
|--------|-------------|
| `@byndyusoft/eslint-config` | Base JavaScript config |
| `@byndyusoft/eslint-config/javascript` | Same as default |
| `@byndyusoft/eslint-config/typescript` | JavaScript + TypeScript rules |
| `@byndyusoft/eslint-config/header-apache-2.0` | Apache 2.0 license header rule |

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
| `@byndyusoft/eslint-config/flow` | Removed (Flow plugin incompatible with ESLint 10) |

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

1. Upgrade Node.js to `>=20.19.0` and ESLint to `>=10.4.0`
2. Remove `.eslintrc.*` / `.eslintignore` (migrate ignores into `eslint.config.js`)
3. Update IDE ESLint extension (VS Code ESLint v3+ supports flat config)
4. Run `eslint .` and fix new violations from updated plugins (typescript-eslint 8, unicorn 65+, sonarjs 4)

## Maintainers

- [@Byndyusoft/owners](https://github.com/orgs/Byndyusoft/teams/owners) <<github.maintain@byndyusoft.com>>
- [@Byndyusoft/team](https://github.com/orgs/Byndyusoft/teams/team)
- [@KillWolfVlad](https://github.com/KillWolfVlad)
- [@sadcitizen](https://github.com/sadcitizen)
