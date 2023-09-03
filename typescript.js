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
  extends: ["./javascript.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:import/typescript",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      settings: {
        "import/resolver": {
          typescript: {},
        },
      },
      rules: {
        // ESLint Best Practices
        "class-methods-use-this": "off", // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/1103
        "consistent-return": "off", // TODO: https://github.com/typescript-eslint/typescript-eslint/issues/1277
        "default-case": "off", // unnecessary for TypeScript
        // eslint-plugin-import Static analysis
        "import/default": "off", // TODO: https://github.com/benmosher/eslint-plugin-import/issues/1908
        // eslint-plugin-import Helpful warnings
        "import/no-named-as-default-member": "off", // TODO: don't work with esModuleInterop
        // @typescript-eslint/eslint-plugin Supported Rules
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow-as-parameter",
          },
        ],
        "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-empty-interface": [
          "warn",
          {
            allowSingleExtends: true,
          },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-regexp-exec": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/unified-signatures": "error",
        // @typescript-eslint/eslint-plugin Extension Rules
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-empty-function": "warn",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-throw-literal": "error",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
      },
    },
    {
      files: [
        "*{spec, test, tests, stories}.*",
        "**/__tests__/**",
        "**/__stories__/**",
      ],
      rules: {
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
