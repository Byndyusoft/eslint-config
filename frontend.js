import typescriptConfig from '@byndyusoft/eslint-config/typescript.js';
import typescriptStyleFrontendConfig from '@byndyusoft/eslint-config/typescript-style-frontend.js';
import jestConfig from '@byndyusoft/eslint-config/jest.js';
import jestStyleFrontendConfig from '@byndyusoft/eslint-config/jest-style-frontend.js';
import reactConfig from '@byndyusoft/eslint-config/react.js';
import reactTestingConfig from '@byndyusoft/eslint-config/react-testing.js';

export default [
    ...typescriptConfig,
    ...typescriptStyleFrontendConfig,
    ...jestConfig,
    ...jestStyleFrontendConfig,
    ...reactConfig,
    ...reactTestingConfig
];
