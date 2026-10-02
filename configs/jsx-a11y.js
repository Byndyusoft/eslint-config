import reactA11y from 'eslint-plugin-react-a11y';

export const jsxA11yRules = {
    'react-a11y/click-events-have-key-events': 'off'
};

export default [
    {
        ...reactA11y.configs.recommended,
        rules: {
            ...reactA11y.configs.recommended.rules,
            ...jsxA11yRules
        }
    }
];
