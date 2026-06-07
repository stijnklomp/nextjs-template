import type { Config } from "jest"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({ dir: "./" })

const customJestConfig: Config = {
	clearMocks: true,
	displayName: "nextjs-template",
	setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/test/e2e/"],
}

export default createJestConfig(customJestConfig)
