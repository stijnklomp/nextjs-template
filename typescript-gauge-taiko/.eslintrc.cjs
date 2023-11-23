module.exports = {
	root: true,
	extends: [
		"./node_modules/stijnklomp-eslint-config/eslintRules.js",
		"./node_modules/stijnklomp-eslint-config/jestRules.js",
		"./node_modules/stijnklomp-eslint-config/typescriptRules.js",
		"next/core-web-vitals"
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module"
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	},
	settings: {
		"prettier/prettier": require("stijnklomp-eslint-config/prettierRules.js")
	},
	ignorePatterns: [".*", "doc", "node_modules", "env", "Dockerfiles", "LICENSE", "global.d.ts", "manifest.json", "next-env.d.ts", "next.config.js"],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "never", { beforeStatementContinuationChars: "always" }]
	}
}