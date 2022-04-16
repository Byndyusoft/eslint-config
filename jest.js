module.exports = {
    overrides: [
        {
            files: ['*{spec, test, tests}.*', '**/__tests__/**'],
            extends: ['plugin:jest/recommended'],
            env: {
                'jest/globals': true
            },
            plugins: ['jest'],
            rules: {
                // eslint-plugin-jest
                'jest/no-duplicate-hooks': 'error',
                'jest/no-test-return-statement': 'error',
                'jest/prefer-called-with': 'warn',
                'jest/prefer-hooks-on-top': 'warn',
                'jest/prefer-strict-equal': 'warn',
                'jest/prefer-to-be': 'warn',
                'jest/prefer-to-contain': 'warn',
                'jest/prefer-to-have-length': 'warn',
                'jest/prefer-todo': 'warn',
                'jest/require-to-throw-message': 'warn',
                'jest/require-top-level-describe': 'warn'
            }
        }
    ]
};
