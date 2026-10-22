import sonarjs from 'eslint-plugin-sonarjs';

export const sonarjsRules = {
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-duplicate-string': ['warn', { threshold: 3 }],
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-useless-catch': 'off',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/prefer-object-literal': 'off',
    'sonarjs/prefer-single-boolean-return': 'warn',
    'sonarjs/prefer-while': 'warn'
};

export default [
    sonarjs.configs.recommended,
    {
        rules: sonarjsRules
    },
    {
        files: ['**/*.{spec,test,tests}.*', '**/__tests__/**', '**/__stories__/**', '**/__fixtures__/**'],
        rules: {
            'sonarjs/no-duplicate-string': 'off',
            'sonarjs/no-identical-functions': 'off'
        }
    }
];
