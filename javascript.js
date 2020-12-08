module.exports = {
    env: {
        es6: true
    },
    extends: [
        'eslint:recommended',
        './configs/best-practices.js',
        './configs/ecmascript-6.js',
        './configs/errors.js',
        './configs/variables.js',
        './configs/import.js'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    reportUnusedDisableDirectives: true
};
