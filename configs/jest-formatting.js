import jestFormatting from 'eslint-plugin-jest-formatting';
import { legacyPluginConfig } from '../utils/plugins.js';

export default [legacyPluginConfig('jest-formatting', jestFormatting, 'recommended')];
