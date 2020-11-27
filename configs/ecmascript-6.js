/* https://eslint.org/docs/rules/#ecmascript-6 */
module.exports = {
    rules: {
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': [
            'warn',
            {
                before: true,
                after: true
            }
        ],
        'generator-star-spacing': [
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
        'rest-spread-spacing': ['warn', 'never'],
        'symbol-description': 'warn',
        'template-curly-spacing': ['warn', 'never'],
        'yield-star-spacing': ['warn', 'before']
    }
};
