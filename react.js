import { defineConfig } from 'eslint/config';
import reactConfig from './configs/react.js';
import reactHooks from './configs/react-hooks.js';
import jsxA11y from './configs/jsx-a11y.js';

export default defineConfig(...reactConfig, ...reactHooks, ...jsxA11y);
