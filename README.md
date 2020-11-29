# eslint-config

## Install

```shell script
$ npm i eslint @byndyusoft/eslint-config --save-dev
```


## Usage

### Flow + React + Jest

```json
{
  "extends": [
    "@byndyusoft/eslint-config/javascript",
    "@byndyusoft/eslint-config/flow",
    "@byndyusoft/eslint-config/react",
    "@byndyusoft/eslint-config/jest"
  ]
}
```

### Typescript + React + Jest

```json
{
  "extends": [
    "@byndyusoft/eslint-config/typescript",
    "@byndyusoft/eslint-config/react",
    "@byndyusoft/eslint-config/jest"
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

### TODO

- [ ] `flowtype`
- [ ] `node`
