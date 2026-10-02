import react from '@eslint-react/eslint-plugin';
import globals from 'globals';

export const reactRules = {
    '@eslint-react/dom-no-missing-button-type': 'error',
    '@eslint-react/dom-no-dangerously-set-innerhtml': 'error',
    '@eslint-react/dom-no-script-url': 'error',
    '@eslint-react/dom-no-unsafe-target-blank': 'warn',
    '@eslint-react/no-unused-state': 'error',
    '@eslint-react/jsx-no-useless-fragment': 'warn',
    '@eslint-react/error-boundaries': 'off',
    '@eslint-react/exhaustive-deps': 'off',
    '@eslint-react/purity': 'off',
    '@eslint-react/rules-of-hooks': 'off',
    '@eslint-react/set-state-in-effect': 'off',
    '@eslint-react/set-state-in-render': 'off',
    '@eslint-react/static-components': 'off',
    '@eslint-react/unsupported-syntax': 'off',
    '@eslint-react/use-memo': 'off'
};

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    },
    react.configs.recommended,
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        extends: [react.configs['recommended-typescript']]
    },
    {
        rules: reactRules
    }
];
