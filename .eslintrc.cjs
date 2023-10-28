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
		"prettier/prettier": require("./node_modules/stijnklomp-eslint-config/prettierRules.js")
	},
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "never", { beforeStatementContinuationChars: "always" }]
	}
}
