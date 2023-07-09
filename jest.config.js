/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	testEnvironment: "node",
	rootDir: ".",
	roots: ["<rootDir>/tests/unit"],
	preset: "ts-jest/presets/default-esm",
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
		"^(\\.{1,2}/.*)\\.ts$": "$1",
		"^(\\.{1,2}/.*)\\.tsx$": "$1",
		"^@/app/(.*)$": "<rootDir>/app/$1",
		"^@/features/(.*)$": "<rootDir>/features/$1",
		"^@/public/(.*)$": "<rootDir>/public/$1",
		"^@/tests/(.*)$": "<rootDir>/tests/$1"
	},
	moduleDirectories: ["node_modules"],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePaths: ["<rootDir>"],
	coverageDirectory: "tests/unit/coverage",
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
