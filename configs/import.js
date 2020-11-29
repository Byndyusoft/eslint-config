module.exports = {
    extends: ['plugin:import/errors', 'plugin:import/warnings'],
    plugins: ['import'],
    rules: {
        'import/first': 'warn',
        'import/no-cycle': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-self-import': 'error',
        'import/no-unused-modules': 'warn',
        'import/no-useless-path-segments': 'warn'
    }
};
