import reactHooks from 'eslint-plugin-react-hooks';
import { fixPlugin } from '../utils/plugins.js';

const reactHooksPlugin = fixPlugin(reactHooks);

export default [
    {
        plugins: {
            'react-hooks': reactHooksPlugin
        },
        rules: reactHooks.configs.recommended.rules
    }
];
