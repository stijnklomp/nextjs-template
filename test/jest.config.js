export default {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		"<rootDir>/**/*.js",
		"<rootDir>/**/*.ts",
		"<rootDir>/**/*.jsx",
		"<rootDir>/**/*.tsx"
	],
	coverageDirectory: "<rootDir>/test/reports/coverage",
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/doc/",
		"/test/",
		"/public/",
		"/diagnostics/"
	],
	coverageReporters: ["text", "json"],
	reporters: [
		"default",
		["jest-junit", { outputDirectory: "<rootDir>/test/reports" }]
	],
	testEnvironment: "node",
	testMatch: ["**/specs/**/*.[jt]s?(x)"]
}
