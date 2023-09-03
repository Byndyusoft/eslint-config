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
  overrides: [
    {
      files: ["*{spec,test,tests}.*", "**/__tests__/**"],
      extends: ["plugin:jest/recommended"],
      env: {
        "jest/globals": true,
      },
      plugins: ["jest"],
      rules: {
        // eslint-plugin-jest
        "jest/no-duplicate-hooks": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-called-with": "warn",
        "jest/prefer-hooks-on-top": "warn",
        "jest/prefer-strict-equal": "warn",
        "jest/prefer-to-be": "warn",
        "jest/prefer-to-contain": "warn",
        "jest/prefer-to-have-length": "warn",
        "jest/prefer-todo": "warn",
        "jest/require-to-throw-message": "warn",
        "jest/require-top-level-describe": "warn",
      },
    },
  ],
};
