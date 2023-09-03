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
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "./configs/best-practices.js",
    "./configs/ecmascript-6.js",
    "./configs/errors.js",
    "./configs/variables.js",
    "./configs/import.js",
  ],
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      parser: "espree",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
  ],
};
