import { defineConfig } from 'eslint/config';

export default defineConfig(
    {
        files: ['**/*.{spec,test,tests}.*', '**/__tests__/**'],
        rules: {
            'jest/consistent-test-it': [
                'error',
                {
                    fn: 'test',
                    withinDescribe: 'test'
                }
            ]
        }
    }
);
