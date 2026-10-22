/* https://eslint.org/docs/rules/#possible-errors */
export const errorsRules = {
    'no-await-in-loop': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-dupe-else-if': 'error',
    'no-empty': [
        'error',
        {
            allowEmptyCatch: true
        }
    ],
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-useless-backreference': 'warn',
    'require-atomic-updates': 'error'
};

export default [
    {
        rules: errorsRules
    }
];
