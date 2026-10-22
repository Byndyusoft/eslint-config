import { defineConfig } from 'eslint/config';
import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

export default defineConfig(
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },
    nodePlugin.configs['flat/recommended'],
    {
        rules: {
            'n/handle-callback-err': 'error',
            'n/no-new-require': 'error',
            'n/no-path-concat': 'error',
            'n/callback-return': 'error',
            'n/exports-style': 'error',
            'n/file-extension-in-import': ['warn', 'never'],
            'n/global-require': 'error',
            'n/no-sync': 'off',
            'n/prefer-promises/dns': 'error',
            'n/prefer-promises/fs': 'error'
        }
    },
    {
        files: ['**/*.{ts,tsx,mts,cts}'],
        rules: {
            'n/no-missing-import': 'off',
            'n/no-unpublished-import': 'off',
            'n/no-unsupported-features/es-syntax': 'off',
            'n/file-extension-in-import': 'off'
        }
    },
    {
        files: ['**/*.{spec,test,tests}.*', '**/__tests__/**', '**/test/**'],
        rules: {
            'n/no-sync': 'off'
        }
    }
);
