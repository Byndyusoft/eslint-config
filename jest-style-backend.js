module.exports = {
    overrides: [
        {
            files: ['*{spec, test, tests}.*', '**/__tests__/**'],
            rules: {
                // eslint-plugin-jest Rules
                'jest/consistent-test-it': 'error'
            }
        }
    ]
};
