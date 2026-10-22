import { defineConfig } from 'eslint/config';
import vitestPlugin from '@vitest/eslint-plugin';

export default defineConfig({
    files: ['**/*.{spec,test,tests}.*', '**/__tests__/**'],
    ...vitestPlugin.configs.recommended,
    languageOptions: {
        globals: vitestPlugin.environments.env.globals
    },
    rules: {
        ...vitestPlugin.configs.recommended.rules,
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-test-return-statement': 'error',
        'vitest/prefer-called-with': 'warn',
        'vitest/prefer-hooks-on-top': 'warn',
        'vitest/prefer-strict-equal': 'warn',
        'vitest/prefer-to-be': 'warn',
        'vitest/prefer-to-contain': 'warn',
        'vitest/prefer-to-have-length': 'warn',
        'vitest/prefer-todo': 'warn',
        'vitest/require-to-throw-message': 'warn',
        'vitest/require-top-level-describe': 'warn'
    }
});
