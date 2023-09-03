/*
 * Copyright 2023 Byndyusoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  env: {
    browser: true,
  },
  extends: ["plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/require-default-props": "off",
        "react/prop-types": "off",
      },
    },
  ],
  rules: {
    // 'react/boolean-prop-naming': [ Правило не работает :((
    //     'warn',
    //     {
    //         propTypeNames: ['boolean'],
    //         rule: '^(is|has|can)[A-Z]([A-Za-z0-9]?)+'
    //     }
    // ],
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "error",
    "react/forbid-dom-props": [
      "warn",
      {
        forbid: [
          {
            propName: "style",
            message: "Avoid using inline styles",
          },
        ],
      },
    ],
    "react/forbid-component-props": [
      "warn",
      {
        forbid: [
          {
            propName: "style",
            message: "Avoid using inline styles",
          },
        ],
      },
    ],
    "react/forbid-foreign-prop-types": "warn",
    "react/forbid-prop-types": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "warn",
    "react/no-danger": "error",
    "react/no-multi-comp": [
      "error",
      {
        ignoreStateless: true,
      },
    ],
    "react/no-redundant-should-component-update": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "error",
    "react/prop-types": "error",
    "react/require-default-props": "error",
    "react/require-optimization": "error",
    "react/self-closing-comp": "warn",
    "react/state-in-constructor": ["warn", "never"],
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/jsx-fragments": ["warn", "syntax"],
    "react/jsx-handler-names": [
      "warn",
      {
        eventHandlerPrefix: "handle", // `handleClick`, `handleChange`, etc
        eventHandlerPropPrefix: "on", // `onClick`, `onChange`, etc
      },
    ],
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
      },
    ],
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-pascal-case": "error",
  },
};
