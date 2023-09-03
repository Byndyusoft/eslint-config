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
  extends: ["plugin:testing-library/react"],
  plugins: ["testing-library"],
  rules: {
    "testing-library/no-await-sync-queries": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": ["error", "react"],
    "testing-library/no-manual-cleanup": "warn",
    "testing-library/no-wait-for-snapshot": "warn",
    "testing-library/prefer-explicit-assert": "error",
    "testing-library/prefer-find-by": "error",
    "testing-library/prefer-presence-queries": "error",
    "testing-library/prefer-screen-queries": "warn",
  },
};
