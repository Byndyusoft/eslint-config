import jestDom from 'eslint-plugin-jest-dom';
import { legacyPluginConfig } from '../utils/plugins.js';

export const jestDomRules = {
    'jest-dom/prefer-checked': 'warn',
    'jest-dom/prefer-empty': 'warn',
    'jest-dom/prefer-enabled-disabled': 'warn',
    'jest-dom/prefer-focus': 'warn',
    'jest-dom/prefer-required': 'warn',
    'jest-dom/prefer-to-have-attribute': 'warn',
    'jest-dom/prefer-to-have-style': 'warn',
    'jest-dom/prefer-to-have-text-content': 'warn'
};

export default [
    legacyPluginConfig('jest-dom', jestDom, 'recommended', {
        rules: {
            ...jestDom.configs.recommended.rules,
            ...jestDomRules
        }
    })
];
