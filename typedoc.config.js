import { typedocSettings } from "stijnklomp-linting-formatting-config/dist/settings/typedoc.js"

export default {
	...typedocSettings,
	entryPoints: ["src"],
	exclude: [
		"**/*.test.ts",
		"**/*.spec.ts",
		"**/__tests__/**",
		"**/test/**",
		"**/generated/**",
	],
	excludeInternal: true,
	excludeProtected: true,
	tsconfig: "./tsconfig.json",
}
