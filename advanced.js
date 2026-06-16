import { defineConfig } from 'eslint/config';
import sonarjs from './configs/sonarjs.js';
import unicorn from './configs/unicorn.js';

export default defineConfig(...sonarjs, ...unicorn);
