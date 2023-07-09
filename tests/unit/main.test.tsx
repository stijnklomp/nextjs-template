import { sum } from "@/features/numberCalculations/sum"
// import { sum } from "../../features/numberCalculations/sum"

describe("sum module", () => {
	test("adds 1 + 2 to equal 3", () => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		expect(sum(1, 2)).toBe(3)
	})
})
