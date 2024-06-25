module.exports = {
    /**
     * "recommended" for ESLint 9.x
     * "recommended-legacy" for ESLint 8.x
     * See https://github.com/SonarSource/eslint-plugin-sonarjs/commit/fc57b805ebf984646e4093b3df3d436e769795d1
     */
    extends: ['plugin:sonarjs/recommended-legacy'],
    plugins: ['sonarjs'],
    rules: {
        'sonarjs/cognitive-complexity': 'warn',
        'sonarjs/no-duplicate-string': ['warn', { threshold: 3 }],
        'sonarjs/no-identical-functions': 'warn',
        'sonarjs/no-useless-catch': 'off',
        'sonarjs/prefer-immediate-return': 'warn',
        'sonarjs/prefer-object-literal': 'off',
        'sonarjs/prefer-single-boolean-return': 'warn',
        'sonarjs/prefer-while': 'warn'
    },
    overrides: [
        {
            files: ['*{spec, test, tests}.*', '**/__tests__/**', '**/__stories__/**', '**/__fixtures__/**'],
            rules: {
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-identical-functions': 'off'
            }
        }
    ]
};
