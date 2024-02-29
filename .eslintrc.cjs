module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: [
		"plugin:jsonc/recommended-with-jsonc",
		"./node_modules/stijnklomp-linting-formatting-config/eslintRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/jestRules.js",
		"./node_modules/stijnklomp-linting-formatting-config/typescript/typescriptRules.js",
		"next/core-web-vitals",
		"prettier"
	],
	overrides: [
		{
			files: ["*.json", "*.json5", "*.jsonc"],
			parser: "jsonc-eslint-parser",
			rules: {
				"@typescript-eslint/no-unnecessary-condition": "off"
			}
		}
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier", "@stylistic"],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
		project: "./tsconfig.json"
	},
	root: true,
	rules: {
		"prettier/prettier": 2,
		quotes: ["error", "double"],
		semi: [
			"error",
			"never",
			{ beforeStatementContinuationChars: "always" }
		],
		"@stylistic/no-multiple-empty-lines": [
			"error",
			{ max: 1, maxBOF: 0, maxEOF: 0 }
		]
	},
	settings: {
		"prettier/prettier": require("./node_modules/stijnklomp-linting-formatting-config/prettier/prettierRules.js")
	}
}
