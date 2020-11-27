module.exports = {
    extends: ['plugin:unicorn/recommended'],
    plugins: ['unicorn'],
    rules: {
        'unicorn/better-regex': 'warn',
        'unicorn/catch-error-name': 'off',
        'unicorn/filename-case': [
            'error',
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
        'unicorn/prefer-number-properties': 'off',
        'unicorn/prefer-replace-all': 'error',
        'unicorn/prefer-set-has': 'warn',
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
