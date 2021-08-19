/* https://eslint.org/docs/rules/#best-practices */
module.exports = {
    rules: {
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'warn',
        complexity: 'warn', // TODO
        'consistent-return': 'error',
        curly: ['error', 'multi-line'],
        'default-case': 'error',
        'default-case-last': 'warn',
        'default-param-last': 'warn',
        'dot-location': ['error', 'property'],
        'dot-notation': 'warn',
        eqeqeq: 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': 'warn',
        'no-caller': 'error',
        'no-constructor-return': 'error',
        'no-div-regex': 'warn',
        'no-else-return': 'warn',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': [
            'error',
            {
                boolean: false
            }
        ],
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'warn',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-with': 'error',
        'prefer-named-capture-group': 'warn',
        'prefer-regex-literals': 'warn',
        radix: 'error',
        'require-await': 'error',
        'wrap-iife': ['error', 'inside'],
        yoda: [
            'warn',
            'never',
            {
                exceptRange: true
            }
        ]
    },
    overrides: [
        {
            files: ['*{spec, test, tests}.*', '**/__tests__/**'],
            rules: {
                'max-classes-per-file': 'off'
            }
        }
    ]
};
