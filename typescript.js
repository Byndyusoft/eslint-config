module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        './configs/best-practices.js',
        './configs/ecmascript.js',
        './configs/errors.js',
        './configs/variables.js',
        './configs/import.js'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json'
    },
    plugins: ['@typescript-eslint'],
    rules: {}
};
