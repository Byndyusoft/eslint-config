module.exports = {
    extends: [
        'eslint:recommended',
        './configs/best-practices.js',
        './configs/ecmascript-6.js',
        './configs/errors.js',
        './configs/variables.js',
        './configs/import.js'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    reportUnusedDisableDirectives: true,
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript'
            ],
            rules: {
                '@typescript-eslint/ban-ts-comment': 'warn',
                '@typescript-eslint/consistent-type-assertions': [
                    'error',
                    {
                        assertionStyle: 'as',
                        objectLiteralTypeAssertions: 'allow-as-parameter'
                    }
                ],
                '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
                '@typescript-eslint/explicit-function-return-type': [
                    'warn',
                    {
                        allowExpressions: true,
                        allowTypedFunctionExpressions: true,
                        allowHigherOrderFunctions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true
                    }
                ],
                '@typescript-eslint/explicit-module-boundary-types': 'error',
                '@typescript-eslint/naming-convention': [
                    'warn',
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                        prefix: ['I']
                    },
                    {
                        selector: 'typeAlias',
                        format: ['PascalCase'],
                        prefix: ['T']
                    },
                    {
                        selector: 'enum',
                        format: ['PascalCase']
                    },
                    {
                        selector: 'enumMember',
                        format: ['PascalCase']
                    }
                ],
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                'no-dupe-class-members': 'off',
                '@typescript-eslint/no-dupe-class-members': 'error',
                '@typescript-eslint/no-empty-function': 'warn',
                '@typescript-eslint/no-empty-interface': [
                    'warn',
                    {
                        allowSingleExtends: true
                    }
                ],
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-floating-promises': 'warn',
                '@typescript-eslint/no-invalid-void-type': 'error',
                'no-magic-numbers': 'off',
                '@typescript-eslint/no-magic-numbers': [
                    'warn',
                    {
                        ignore: [-1, 0, 1],
                        ignoreArrayIndexes: true,
                        ignoreDefaultValues: true,
                        ignoreEnums: true,
                        ignoreNumericLiteralTypes: true,
                        ignoreReadonlyClassProperties: true
                    }
                ],
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': 'error',
                '@typescript-eslint/no-throw-literal': 'error',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
                '@typescript-eslint/no-unnecessary-condition': 'warn',
                '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
                '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
                '@typescript-eslint/prefer-enum-initializers': 'warn',
                '@typescript-eslint/prefer-includes': 'warn',
                '@typescript-eslint/prefer-literal-enum-member': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'warn',
                '@typescript-eslint/prefer-optional-chain': 'warn',
                '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
                '@typescript-eslint/prefer-regexp-exec': 'warn',
                '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
                '@typescript-eslint/prefer-ts-expect-error': 'error',
                '@typescript-eslint/require-array-sort-compare': 'error',
                'no-return-await': 'off',
                '@typescript-eslint/return-await': 'error',
                '@typescript-eslint/switch-exhaustiveness-check': 'error',
                '@typescript-eslint/unified-signatures': 'error'
            }
        },
        {
            files: ['*.{spec, test, tests, stories}.*', '**/__tests__/**', '**/__stories__/**'],
            rules: {
                '@typescript-eslint/no-magic-numbers': 'off',
                '@typescript-eslint/unbound-method': 'off'
            }
        }
    ]
};
