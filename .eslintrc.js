module.exports = {
	root: true,
	extends: ["./node_modules/stijnklomp-eslint-config/eslint.js"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2021,
		srouceType: "module"
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true
	}
}
