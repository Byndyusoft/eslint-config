module.exports = {
    env: {
        browser: true
    },
    extends: ['plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'react/prop-types': 'off'
            }
        }
    ],
    rules: {
        'react/boolean-prop-naming': [
            // Правило не работает :((
            'error',
            {
                rule: '^[A-Z]([A-Za-z0-9]?)+' //'^(is|has|can)[A-Z]([A-Za-z0-9]?)+'
            }
        ],
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/forbid-component-props': [
            'warn',
            {
                forbid: [
                    {
                        propName: 'style',
                        message: 'Avoid using inline styles'
                    }
                ]
            }
        ],
        'react/forbid-foreign-prop-types': 'warn',
        'react/forbid-prop-types': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-danger': 'error',
        'react/no-multi-comp': [
            'error',
            {
                ignoreStateless: true
            }
        ],
        'react/no-redundant-should-component-update': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'error',
        'react/require-default-props': 'error',
        'react/require-optimization': 'error',
        'react/self-closing-comp': 'warn',
        'react/state-in-constructor': ['warn', 'never'],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/jsx-curly-brace-presence': ['warn', 'never'],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx', '.tsx']
            }
        ],
        'react/jsx-fragments': ['warn', 'syntax'],
        'react/jsx-handler-names': [
            'warn',
            {
                eventHandlerPrefix: 'handle', // `handleClick`, `handleChange`, etc
                eventHandlerPropPrefix: 'on' // `onClick`, `onChange`, etc
            }
        ],
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true
            }
        ],
        // 'react/jsx-no-constructed-context-values': 'error', Ошибка при проверке правила
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-pascal-case': 'error'
    }
};
