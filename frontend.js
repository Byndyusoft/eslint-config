import { defineConfig } from 'eslint/config';
import typescript from './typescript.js';
import typescriptStyleFrontend from './typescript-style-frontend.js';
import jest from './jest.js';
import jestStyleFrontend from './jest-style-frontend.js';
import react from './react.js';
import reactTesting from './react-testing.js';

export default defineConfig(
    ...typescript,
    ...typescriptStyleFrontend,
    ...jest,
    ...jestStyleFrontend,
    ...react,
    ...reactTesting
);
