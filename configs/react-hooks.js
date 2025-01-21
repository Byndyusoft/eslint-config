import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
    {
        plugins: {
            'react-hooks': reactHooksPlugin
        },
        rules: {
            ...(reactHooksPlugin.configs.recommended?.rules ?? {})
        }
    }
];
