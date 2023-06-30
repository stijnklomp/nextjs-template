export default {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [ "<rootDir>/src/**/*.js", "<rootDir>/src/**/*.ts" ],
	coverageDirectory: "<rootDir>/test/reports/coverage",
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/doc/",
		"/test/",
		"/public/",
		"/diagnostics/"
	],
	coverageReporters: [
		"text",
		"json"
	],
	reporters: [
		"default",
		[ "jest-junit", { outputDirectory: "<rootDir>/test/reports" } ]
	],
	rootDir: "../",
	testEnvironment: "node",
	testMatch: [ "**/specs/**/*.[jt]s?(x)" ]
}