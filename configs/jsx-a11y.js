import jsxA11y from 'eslint-plugin-jsx-a11y';
import { legacyPluginConfig } from '../utils/plugins.js';

export const jsxA11yRules = {
    'jsx-a11y/click-events-have-key-events': 'off'
};

export default [
    legacyPluginConfig('jsx-a11y', jsxA11y, 'recommended', {
        rules: {
            ...jsxA11y.configs.recommended.rules,
            ...jsxA11yRules
        }
    })
];
