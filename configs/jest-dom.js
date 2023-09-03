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
  extends: ["plugin:jest-dom/recommended"],
  plugins: ["jest-dom"],
  rules: {
    "jest-dom/prefer-checked": "warn",
    "jest-dom/prefer-empty": "warn",
    "jest-dom/prefer-enabled-disabled": "warn",
    "jest-dom/prefer-focus": "warn",
    "jest-dom/prefer-required": "warn",
    "jest-dom/prefer-to-have-attribute": "warn",
    "jest-dom/prefer-to-have-style": "warn",
    "jest-dom/prefer-to-have-text-content": "warn",
  },
};
