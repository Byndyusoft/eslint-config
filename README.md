# eslint-config

ESLint config for Byndyusoft projects

## Requirements

- Node.js v12 LTS or later
- npm or yarn
- ESLint v7

## Install

```bash
npm i --save-dev eslint @byndyusoft/eslint-config
```

or

```bash
yarn add -D eslint @byndyusoft/eslint-config
```

Note: If you have React project created with create-react-app, then you haven't install eslint manually, because it comes with react-scripts. Otherwise it won't let you run eslint until you remove it from `package.json`.

### Quick install `back` config

Install config dependencies:

```json
{
  "@typescript-eslint/eslint-plugin": "^4.26.0",
  "@typescript-eslint/parser": "^4.26.0",
  "eslint-config-prettier": "^8.3.0",
  "eslint-import-resolver-typescript": "^2.4.0",
  "eslint-plugin-import": "^2.23.4",
  "eslint-plugin-jest": "^24.3.6",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-prettier": "^3.4.0",
  "eslint-plugin-simple-import-sort": "^7.0.0",
  "eslint-plugin-sonarjs": "^0.7.1-117",
  "eslint-plugin-unicorn": "^33.0.1"
}
```

Create ESLint config:

```json
{
  "root": true,
  "extends": ["@byndyusoft/eslint-config/back"]
}
```

Add engines information to your `package.json`:

```json
{
  "engines": {
    "node": ">=12"
  }
}
```

### Quick install `front` config

Install config dependencies:

```json
{
  "@typescript-eslint/eslint-plugin": "^4.26.0",
  "@typescript-eslint/parser": "^4.26.0",
  "eslint-import-resolver-typescript": "^2.4.0",
  "eslint-plugin-import": "^2.23.4",
  "eslint-plugin-jest": "^24.3.6",
  "eslint-plugin-jest-dom": "^3.9.0",
  "eslint-plugin-jsx-a11y": "^6.4.1",
  "eslint-plugin-react": "^7.24.0",
  "eslint-plugin-react-hooks": "^4.2.0",
  "eslint-plugin-testing-library": "^4.6.0"
}
```

Create ESLint config:

```json
{
  "root": true,
  "extends": ["@byndyusoft/eslint-config/front"]
}
```

## Usage

Common:

| Configs                       | Extends from | Dependencies\*                                                                                             |
| ----------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| [javascript](./javascript.js) | N/A          | `eslint-plugin-import@2`                                                                                   |
| [typescript](./typescript.js) | `javascript` | `@typescript-eslint/eslint-plugin@4`, `@typescript-eslint/parser@4`, `eslint-import-resolver-typescript@2` |
| [advanced](./advanced.js)     | N/A          | `eslint-plugin-sonarjs@0`, `eslint-plugin-unicorn@33`                                                      |
| [jest](./jest.js)             | N/A          | `eslint-plugin-jest@24`                                                                                    |
| [stylistic](./stylistic.js)   | N/A          | N/A                                                                                                        |

Back:

| Configs                                             | Extends from                                                                        | Use together with | Dependencies\*                                         |
| --------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------ |
| [back](./back.js)                                   | `typescript`,`typescript-style-back`, `node`, `advanced`, `jest`, `jest-style-back` | N/A               | `eslint-plugin-prettier@3`, `eslint-config-prettier@8` |
| [typescript-style-back](./typescript-style-back.js) | N/A                                                                                 | `typescript`      | `eslint-plugin-simple-import-sort@7`                   |
| [node](./node.js)                                   | N/A                                                                                 | N/A               | `eslint-plugin-node@11`                                |
| [jest-style-back](./jest-style-back.js)             | N/A                                                                                 | `jest`            | N/A                                                    |

Front:

| Configs                                               | Extends from                                                                                 | Use together with | Dependencies\*                                                                     |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| [front](./front.js)                                   | `typescript`, `typescript-style-front`, `jest`, `jest-style-front`, `react`, `react-testing` | N/A               | N/A                                                                                |
| [flow](./flow.js)                                     | N/A                                                                                          | N/A               | `eslint-plugin-flowtype@5`                                                         |
| [typescript-style-front](./typescript-style-front.js) | N/A                                                                                          | `typescript`      | N/A                                                                                |
| [jest-style-front](./jest-style-front.js)             | N/A                                                                                          | `jest`            | N/A                                                                                |
| [react](./react.js)                                   | N/A                                                                                          | N/A               | `eslint-plugin-react@7`, `eslint-plugin-react-hooks@4`, `eslint-plugin-jsx-a11y@6` |
| [react-testing](./react-testing.js)                   | N/A                                                                                          | N/A               | `eslint-plugin-testing-library@3`, `eslint-plugin-jest-dom@3`                      |

Install config dependencies and add config to your ESLint config:

```json
{
  "extends": ["@byndyusoft/eslint-config/<config>"]
}
```

Add engines information to your `package.json` if you use [node](./node.js) config:

```json
{
  "engines": {
    "node": ">=12"
  }
}
```

> \*Each dependency is written in the format `<package name>@<major version>`

## Maintainers

- [@Byndyusoft/owners](https://github.com/orgs/Byndyusoft/teams/owners) <<github.maintain@byndyusoft.com>>
- [@Byndyusoft/team](https://github.com/orgs/Byndyusoft/teams/team)
