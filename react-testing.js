import { defineConfig } from 'eslint/config';
import testingLibrary from './configs/testing-library.js';
import jestDom from './configs/jest-dom.js';

export default defineConfig(...testingLibrary, ...jestDom);
