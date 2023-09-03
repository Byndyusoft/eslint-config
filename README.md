# eslint-config

[![npm@latest](https://img.shields.io/npm/v/@byndyusoft/eslint-config/latest.svg)](https://www.npmjs.com/package/@byndyusoft/eslint-config)
[![test](https://github.com/Byndyusoft/eslint-config/actions/workflows/test.yaml/badge.svg?branch=master)](https://github.com/Byndyusoft/eslint-config/actions/workflows/test.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Shareable config for ESLint.

## Requirements

- Node.js v18 LTS or later
- Yarn
- ESLint v8.8.0 or later

## Install

```bash
yarn add -D @byndyusoft/eslint-config eslint
```

> Note: If you have React project created with create-react-app, then you haven't install eslint manually, because it comes with react-scripts. Otherwise it won't let you run eslint until you remove it from `package.json`.

## Usage

### Backend (Node.js + TypeScript/JavaScript + Jest)

`.eslintrc.json`

```json
{
  "root": true,
  "extends": ["@byndyusoft/eslint-config/backend"]
}
```

`package.json`

```json
{
  "engines": {
    "node": ">=18"
  }
}
```

### Frontend (React + TypeScript/JavaScript + Jest)

`.eslintrc.json`

```json
{
  "root": true,
  "extends": ["@byndyusoft/eslint-config/frontend"]
}
```

## Maintainers

- [@Byndyusoft/owners](https://github.com/orgs/Byndyusoft/teams/owners) <<github.maintain@byndyusoft.com>>
- [@Byndyusoft/team](https://github.com/orgs/Byndyusoft/teams/team)
- [@KillWolfVlad](https://github.com/KillWolfVlad)
- [@sadcitizen](https://github.com/sadcitizen)

## License

This repository is released under version 2.0 of the
[Apache License](https://www.apache.org/licenses/LICENSE-2.0).
