module.exports = {
    extends: ['./configs/sonarjs.js', './configs/unicorn.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
};
