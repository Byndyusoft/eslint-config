# eslint-config

> requires ESLint >=7.10.0

## Install

```shell script
$ npm i eslint @byndyusoft/eslint-config --save-dev
```

Note: If you have React project created with create-react-app, then you haven't install eslint manually, because it comes with react-scripts. Otherwise it won't let you run eslint until you remove it from `package.json`.


## Usage

### Node + Jest

```json
{
  "extends": [
    "@byndyusoft/eslint-config/javascript",
    "@byndyusoft/eslint-config/jest",
    "@byndyusoft/eslint-config/node"
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

### Node + Typescript + Jest

```json
{
  "extends": [
    "@byndyusoft/eslint-config/typescript",
    "@byndyusoft/eslint-config/jest",
    "@byndyusoft/eslint-config/node"
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  }
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

### Flow + React + Jest

```json
{
  "extends": [
    "@byndyusoft/eslint-config/javascript",
    "@byndyusoft/eslint-config/flow",
    "@byndyusoft/eslint-config/jest",
    "@byndyusoft/eslint-config/react",
    "@byndyusoft/eslint-config/react-testing"
  ]
}
```

### Typescript + React + Jest

```json
{
  "extends": [
    "@byndyusoft/eslint-config/typescript",
    "@byndyusoft/eslint-config/jest",
    "@byndyusoft/eslint-config/react",
    "@byndyusoft/eslint-config/react-testing"
  ],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

### CSS Modules
For appropriate working with react css modules you have to add type like this
```js
declare module '*.css' {
    const styles: { [className: string]: string };
    export default styles;
}
```

### Webpack assets
For appropriate working with  assets imported into component you have to add type like this
```js
declare module '*.png'
{
    const content: string;
    export default    content;
}

declare module '*.svg'
{
    const content: string;
    export default content;
}
```

For example:
###webpack.d.ts
```js
declare module '*.png' {
    const content: string;
    export default content;
}
declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.css' {
    const styles: { [className: string]: string };
    export default styles;
}
``` 

###tsconfig.json
```js
...
  "include": [
    "src",
    "webpack.d.ts"
  ],
...
```


### TODO

- [ ] `flowtype`
- [X] `node`
