/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	testEnvironment: "node",
	rootDir: ".",
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	coverageDirectory: "coverage"
}
