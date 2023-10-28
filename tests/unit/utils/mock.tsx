/**
 * Mock all timeout calls\
 * even if they are asynchronous and haven't happened yet
 */
export const mockAllTimeout = () => {
	;(global.setTimeout as unknown as jest.Mock).mockImplementation(
		(cb: () => void) => {
			cb()

			return 0
		}
	)
}
