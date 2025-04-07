/* https://eslint.org/docs/rules/#ecmascript-6 */

export default [
    {
        rules: {
            'arrow-body-style': ['warn', 'as-needed'],
            '@stylistic/generator-star-spacing': [
                'warn',
                {
                    before: false,
                    after: true
                }
            ],
            'no-duplicate-imports': 'error',
            'no-useless-computed-key': 'warn',
            'no-useless-constructor': 'warn',
            'no-useless-rename': 'warn',
            'no-var': 'warn',
            'object-shorthand': [
                'warn',
                'always',
                {
                    avoidQuotes: true,
                    avoidExplicitReturnArrows: true
                }
            ],
            'prefer-arrow-callback': 'warn',
            'prefer-const': 'warn',
            'prefer-destructuring': 'warn',
            'prefer-rest-params': 'warn',
            'prefer-spread': 'warn',
            'prefer-template': 'warn',
            '@stylistic/rest-spread-spacing': ['warn', 'never'],
            'symbol-description': 'warn',
            '@stylistic/template-curly-spacing': ['warn', 'never'],
            '@stylistic/yield-star-spacing': ['warn', 'before']
        }
    }
];
