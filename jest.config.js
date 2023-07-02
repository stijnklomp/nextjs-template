/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	testEnvironment: "node",
	rootDir: ".",
	roots: ["<rootDir>"],
	preset: "ts-jest/presets/default-esm",
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1"
	},
	moduleDirectories: ["node_modules"],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePaths: ["<rootDir>"],
	coverageDirectory: "coverage",
	transform: {
		// "^.+\\.[tj]sx?$" to process js/ts with `ts-jest`
		// "^.+\\.m?[tj]sx?$" to process js/ts/mjs/mts with `ts-jest`
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				useESM: true
			}
		]
	}
}
