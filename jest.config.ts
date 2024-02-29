import type { Config } from "jest"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ConfigGlobals from "node_modules/@jest/types/build/index"
import { default as nextJest } from "next/jest"

const createJestConfig = nextJest({
	dir: "./"
})

const config: Config = {
	clearMocks: true,
	collectCoverageFrom: ["<rootDir>/**/*.{cjs,mjs,js,jsx,ts,tsx}"],
	coverageDirectory: "<rootDir>/test/unit/coverage",
	coveragePathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/.husky/",
		"<rootDir>/.next/",
		"<rootDir>/doc/",
		"<rootDir>/public/",
		"<rootDir>/styles/",
		"<rootDir>/types/",
		"<rootDir>/test/unit/utils",
		"<rootDir>/diagnostics/"
	],
	coverageProvider: "v8",
	coverageReporters: ["text", "json"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		},
		"./app/": {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0
		}
	},
	moduleDirectories: ["node_modules"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		"^@/app/(.*)$": "<rootDir>/app/$1",
		"^@/utils/(.*)$": "<rootDir>/utils/$1",
		"^@/features/(.*)$": "<rootDir>/features/$1",
		"^@/public/(.*)$": "<rootDir>/public/$1",
		"^@/test/(.*)$": "<rootDir>/test/$1",
		"^@/styles/(.*)$": "<rootDir>/styles/$1"
	},
	modulePaths: ["<rootDir>"],
	preset: "ts-jest/presets/default-esm",
	reporters: [
		"default",
		[
			"jest-junit",
			{
				outputDirectory: "<rootDir>/test/unit/reports",
				outputName: "junit.xml"
			}
		]
	],
	rootDir: ".",
	roots: [
		"<rootDir>/test/unit",
		"<rootDir>/app",
		"<rootDir>/features",
		"<rootDir>/utils"
	],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jsdom",
	testMatch: ["**/*test.[jt]s?(x)"]
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
