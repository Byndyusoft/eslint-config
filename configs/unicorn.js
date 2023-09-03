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
  extends: ["plugin:unicorn/recommended"],
  plugins: ["unicorn"],
  rules: {
    // eslint-plugin-unicorn
    "unicorn/better-regex": "warn",
    "unicorn/catch-error-name": "off",
    "unicorn/filename-case": [
      "warn",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-null": "off",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-zero-fractions": "warn",
    "unicorn/numeric-separators-style": "off", // style
    "unicorn/prefer-add-event-listener": "warn",
    "unicorn/prefer-array-find": "warn",
    "unicorn/prefer-array-flat-map": "warn",
    "unicorn/prefer-dom-node-append": "warn",
    "unicorn/prefer-dom-node-dataset": "warn",
    "unicorn/prefer-dom-node-remove": "warn",
    "unicorn/prefer-dom-node-text-content": "warn",
    "unicorn/prefer-includes": "warn",
    "unicorn/prefer-keyboard-event-key": "warn",
    "unicorn/prefer-math-trunc": "warn",
    "unicorn/prefer-modern-dom-apis": "warn",
    "unicorn/prefer-negative-index": "warn",
    "unicorn/prefer-number-properties": "off",
    "unicorn/prefer-optional-catch-binding": "warn",
    "unicorn/prefer-query-selector": "warn",
    "unicorn/prefer-reflect-apply": "warn",
    "unicorn/prefer-set-has": "warn",
    "unicorn/prefer-spread": "warn",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-trim-start-end": "warn",
    "unicorn/prefer-ternary": "warn",
    "unicorn/prefer-type-error": "warn",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        replacements: {
          args: {
            arguments: false,
          },
          env: {
            environment: false,
          },
          err: {
            error: false,
          },
          params: {
            parameters: false,
          },
          props: {
            properties: false,
          },
          ref: {
            reference: false,
          },
        },
      },
    ],
  },
};
