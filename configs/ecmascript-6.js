/* https://eslint.org/docs/rules/#ecmascript-6 */
export const ecmascript6Rules = {
    'arrow-body-style': ['warn', 'as-needed'],
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
    'symbol-description': 'warn'
};

export default [
    {
        rules: ecmascript6Rules
    }
];
