module.exports = {
    overrides: [
        {
            files: ['*{spec, test, tests}.*'],
            rules: {
                // eslint-plugin-jest Rules
                'jest/consistent-test-it': [
                    'error',
                    {
                        fn: 'test',
                        withinDescribe: 'test'
                    }
                ]
            }
        }
    ]
};
