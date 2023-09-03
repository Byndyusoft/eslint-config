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
  rules: {
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": [
      "warn",
      {
        before: true,
        after: true,
      },
    ],
    "generator-star-spacing": [
      "warn",
      {
        before: false,
        after: true,
      },
    ],
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-var": "warn",
    "object-shorthand": [
      "warn",
      "always",
      {
        avoidQuotes: true,
        avoidExplicitReturnArrows: true,
      },
    ],
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "rest-spread-spacing": ["warn", "never"],
    "symbol-description": "warn",
    "template-curly-spacing": ["warn", "never"],
    "yield-star-spacing": ["warn", "before"],
  },
};
