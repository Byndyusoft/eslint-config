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
  extends: [
    "./typescript.js",
    "./typescript-style-backend.js",
    "./node.js",
    "./advanced.js",
    "./jest.js",
    "plugin:prettier/recommended",
  ],
  plugins: ["dirs"],
  overrides: [
    {
      files: ["*.js", "*.ts", "*.tsx"],
      rules: {
        // eslint general
        "prefer-destructuring": "off",
        // eslint-plugin-unicorn
        "unicorn/filename-case": [
          "warn",
          {
            case: "camelCase",
          },
        ],
        "unicorn/prefer-module": "off", // unnecessary for backend
        "unicorn/prefer-node-protocol": "off", // TODO: TypeScript don't have types for 'node:*'
        "unicorn/prefer-top-level-await": "off", // esm only rule
        "unicorn/prevent-abbreviations": [
          "error",
          {
            replacements: {
              acc: false,
              args: false,
              doc: false,
              docs: false,
              env: false,
              err: false,
              i: false,
              param: false,
              params: false,
              prod: false,
              temp: false,
            },
          },
        ],
        // eslint-plugin-dirs
        "dirs/dirnames": [
          "warn",
          {
            pattern: "^(__)?([a-z0-9]+)([A-Z][a-z0-9]+)*(__)?$",
          },
        ],
        // eslint-plugin-prettier
        "prettier/prettier": "off", // run prettier externally
      },
    },
  ],
};
