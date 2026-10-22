import { fixupPluginRules } from '@eslint/compat';

/**
 * Wraps a legacy ESLint plugin for flat config compatibility.
 * @param {import('eslint').ESLint.Plugin} plugin
 */
export function fixPlugin(plugin) {
    return fixupPluginRules(plugin);
}

/**
 * Builds a flat config slice from a plugin's legacy shared config.
 * @param {string} pluginName
 * @param {import('eslint').ESLint.Plugin} plugin
 * @param {string} configName
 * @param {import('eslint').Linter.Config} [extra]
 */
export function legacyPluginConfig(pluginName, plugin, configName, extra = {}) {
    const fixedPlugin = fixPlugin(plugin);
    const sharedConfig = plugin.configs?.[configName];

    if (!sharedConfig) {
        throw new Error(`Config "${configName}" not found for plugin "${pluginName}"`);
    }

    return {
        plugins: {
            [pluginName]: fixedPlugin
        },
        rules: sharedConfig.rules ?? {},
        ...extra
    };
}
