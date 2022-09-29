# eslint-config

[![NPM version](https://img.shields.io/npm/v/@byndyusoft/eslint-config.svg)](https://www.npmjs.com/package/@byndyusoft/eslint-config)


## Requirements

- ESLint v8.8.0 or later

## Install

```shell script
$ npm i eslint --save-dev
$ npm i eslint @byndyusoft/eslint-config --save-dev
```

Note: If you have React project created with create-react-app, then you haven't install eslint manually, because it comes with react-scripts. Otherwise it won't let you run eslint until you remove it from `package.json`.

## Usage

### Backend 
**Node + TypeScript/JavaScript + Jest**

```json
{
  "extends": [
    "@byndyusoft/eslint-config/backend"
  ]
}
```

**package.json**

```json
{
  "engines": {
    "node": ">=8.10.0"
  }
}
```

### Frontend 
**React + TypeScript/JavaScript + Jest**

```json
{
  "extends": [
    "@byndyusoft/eslint-config/frontend"
  ]
}
```

## Maintainers

- [@Byndyusoft/owners](https://github.com/orgs/Byndyusoft/teams/owners) <<github.maintain@byndyusoft.com>>
- [@Byndyusoft/team](https://github.com/orgs/Byndyusoft/teams/team)
- [@KillWolfVlad](https://github.com/KillWolfVlad)
- [@sadcitizen](https://github.com/sadcitizen)

