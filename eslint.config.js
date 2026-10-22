import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig(
    {
        ignores: ['node_modules/**', 'fixtures/**']
    },
    eslintConfigPrettier,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module'
        },
        rules: {
            'no-console': 'off'
        }
    }
);
