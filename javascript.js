const { JS_FILES } = require('./const/files');

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
    reportUnusedDisableDirectives: true,
    overrides: [
        {
            files: [...JS_FILES],
            parser: 'espree',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        }
    ]
};
