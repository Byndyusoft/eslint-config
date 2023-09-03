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
    node: true,
  },
  extends: ["plugin:n/recommended"],
  rules: {
    // eslint-plugin-n Possible Errors
    "n/handle-callback-err": "error",
    "n/no-new-require": "error",
    "n/no-path-concat": "error",
    // eslint-plugin-n Stylistic Issues
    "n/callback-return": "error",
    "n/exports-style": "error",
    "n/file-extension-in-import": ["warn", "never"],
    "n/global-require": "error",
    "n/no-sync": "error",
    "n/prefer-promises/dns": "error",
    "n/prefer-promises/fs": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // eslint-plugin-n Possible Errors
        "n/no-missing-import": "off", // unnecessary for TypeScript
        "n/no-unpublished-import": "off", // doesn't support import types from devDependencies
        "n/no-unsupported-features/es-syntax": "off", // unnecessary for TypeScript
        // eslint-plugin-n Stylistic Issues
        "n/file-extension-in-import": "off", // unnecessary for TypeScript
      },
    },
    {
      files: ["*{spec,test,tests}.*", "**/__tests__/**", "**/test/**"],
      rules: {
        // eslint-plugin-n Stylistic Issues
        "n/no-sync": "off", // allow sync methods in tests, e.g. when use factory.ts
      },
    },
  ],
};
