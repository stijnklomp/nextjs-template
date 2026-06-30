export const logger = {
	debug: (...args: unknown[]) => {
		console.debug(...args)
	},
	error: (...args: unknown[]) => {
		console.error(...args)
	},
	info: (...args: unknown[]) => {
		console.info(...args)
	},
	warn: (...args: unknown[]) => {
		console.warn(...args)
	},
}
