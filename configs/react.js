import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            react: reactPlugin
        },
        languageOptions: {
            globals: {
                ...globals.browser
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        settings: {
            'import/resolver': {
                typescript: {},
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                }
            },
            react: {
                version: 'detect'
            }
        },

        rules: {
            ...(reactPlugin.configs.recommended?.rules ?? {}),
            // 'react/boolean-prop-naming': [ Правило не работает :((
            //     'warn',
            //     {
            //         propTypeNames: ['boolean'],
            //         rule: '^(is|has|can)[A-Z]([A-Za-z0-9]?)+'
            //     }
            // ],
            'react/button-has-type': 'error',
            'react/default-props-match-prop-types': 'error',
            'react/forbid-dom-props': [
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
            'react/no-array-index-key': 'warn',
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
                    eventHandlerPrefix: 'handle',
                    eventHandlerPropPrefix: 'on'
                }
            ],
            'react/jsx-no-bind': [
                'error',
                {
                    allowArrowFunctions: true
                }
            ],
            'react/jsx-no-script-url': 'error',
            'react/jsx-no-target-blank': 'warn',
            'react/jsx-no-useless-fragment': 'warn',
            'react/jsx-pascal-case': 'error',
            'react/react-in-jsx-scope': 'off'
        }
    },
    {
        files: ['*.ts', '*.tsx'],
        rules: {
            'react/require-default-props': 'off',
            'react/prop-types': 'off'
        }
    }
];
