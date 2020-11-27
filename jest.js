module.exports = {
    env: {
        'jest/globals': true
    },
    extends: ['plugin:jest/recommended'],
    plugins: ['jest'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    settings: {
        jest: {
            version: 26
        }
    },
    overrides: [
        {
            files: ['*.{spec, test, tests}.*', '**/__tests__/**'],
            rules: {
                'jest/consistent-test-it': [
                    'error',
                    {
                        fn: 'test',
                        withinDescribe: 'test'
                    }
                ],
                'jest/no-duplicate-hooks': 'error',
                'jest/no-test-return-statement': 'error',
                'jest/prefer-called-with': 'warn',
                'jest/prefer-hooks-on-top': 'warn',
                'jest/prefer-strict-equal': 'warn',
                'jest/prefer-to-be-null': 'warn',
                'jest/prefer-to-contain': 'warn',
                'jest/prefer-to-have-length': 'warn',
                'jest/prefer-todo': 'warn',
                'jest/require-to-throw-message': 'warn',
                'jest/require-top-level-describe': 'warn'
            }
        }
    ]
};
