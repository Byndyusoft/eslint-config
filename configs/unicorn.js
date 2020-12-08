module.exports = {
    extends: ['plugin:unicorn/recommended'],
    plugins: ['unicorn'],
    rules: {
        'unicorn/better-regex': 'warn',
        'unicorn/catch-error-name': 'off',
        'unicorn/filename-case': [
            'warn',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                    kebabCase: true
                }
            }
        ],
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-for-loop': 'warn',
        'unicorn/no-null': 'off',
        'unicorn/no-reduce': 'off',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-zero-fractions': 'warn',
        'unicorn/prefer-add-event-listener': 'warn',
        'unicorn/prefer-array-find': 'warn',
        'unicorn/prefer-dataset': 'warn',
        'unicorn/prefer-event-key': 'warn',
        'unicorn/prefer-flat-map': 'warn',
        'unicorn/prefer-includes': 'warn',
        'unicorn/prefer-math-trunc': 'warn',
        'unicorn/prefer-modern-dom-apis': 'warn',
        'unicorn/prefer-negative-index': 'warn',
        'unicorn/prefer-node-append': 'warn',
        'unicorn/prefer-node-remove': 'warn',
        'unicorn/prefer-number-properties': 'off',
        'unicorn/prefer-optional-catch-binding': 'warn',
        'unicorn/prefer-query-selector': 'warn',
        'unicorn/prefer-reflect-apply': 'warn',
        'unicorn/prefer-replace-all': 'error',
        'unicorn/prefer-set-has': 'warn',
        'unicorn/prefer-spread': 'warn',
        'unicorn/prefer-ternary': 'warn',
        'unicorn/prefer-text-content': 'warn',
        'unicorn/prefer-trim-start-end': 'warn',
        'unicorn/prefer-type-error': 'warn',
        'unicorn/prevent-abbreviations': [
            'warn',
            {
                replacements: {
                    args: {
                        arguments: false
                    },
                    env: {
                        environment: false
                    },
                    err: {
                        error: false
                    },
                    params: {
                        parameters: false
                    },
                    props: {
                        properties: false
                    },
                    ref: {
                        reference: false
                    }
                }
            }
        ]
    }
};
