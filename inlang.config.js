/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
	const { default: sdkPlugin } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/sdk-js-plugin@0.11.8/dist/index.js'
	);

	const { default: standardLintRules } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js'
	);

	const { default: pluginYaml } = await env.$import(
		'https://cdn.jsdelivr.net/gh/felixhaeberle/inlang-plugin-yaml@latest/dist/index.js'
	);

	return {
		referenceLanguage: 'en',
		plugins: [
			pluginYaml({
				pathPattern: './src/lang/{language}.yml'
			}),
			sdkPlugin({ languageNegotiation: { strategies: [{ type: 'url' }] } }),
			standardLintRules()
		]
	};
}
