import "@testing-library/jest-dom"

jest.mock("@/lib/logger", () => ({
	logger: {
		debug: jest.fn(),
		error: jest.fn(),
		info: jest.fn(),
		warn: jest.fn(),
	},
}))
