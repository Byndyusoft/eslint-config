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
  extends: ["plugin:sonarjs/recommended"],
  plugins: ["sonarjs"],
  rules: {
    "sonarjs/cognitive-complexity": "warn",
    "sonarjs/no-duplicate-string": "warn",
    "sonarjs/no-identical-functions": "warn",
    "sonarjs/no-useless-catch": "off",
    "sonarjs/prefer-immediate-return": "warn",
    "sonarjs/prefer-object-literal": "off",
    "sonarjs/prefer-single-boolean-return": "warn",
    "sonarjs/prefer-while": "warn",
  },
  overrides: [
    {
      files: [
        "*{spec,test,tests}.*",
        "**/__tests__/**",
        "**/__stories__/**",
        "**/__fixtures__/**",
      ],
      rules: {
        "sonarjs/no-duplicate-string": "off",
        "sonarjs/no-identical-functions": "off",
      },
    },
  ],
};
