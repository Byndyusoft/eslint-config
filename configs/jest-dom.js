module.exports = {
    extends: ['plugin:jest-dom/recommended'],
    plugins: ['jest-dom'],
    rules: {
        'jest-dom/prefer-checked': 'warn',
        'jest-dom/prefer-empty': 'warn',
        'jest-dom/prefer-enabled-disabled': 'warn',
        'jest-dom/prefer-focus': 'warn',
        'jest-dom/prefer-required': 'warn',
        'jest-dom/prefer-to-have-attribute': 'warn',
        'jest-dom/prefer-to-have-style': 'warn',
        'jest-dom/prefer-to-have-text-content': 'warn'
    }
};
