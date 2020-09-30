module.exports = {
    ecmaFeatures: {
        jsx: true
    },
    env: {
        browser: true
    },
    extends: ['plugin:react/recommended'],
    plugins: ['react'],
    rules: {},
    settings: {
        react: {
            version: 'detect'
        }
    }
};
