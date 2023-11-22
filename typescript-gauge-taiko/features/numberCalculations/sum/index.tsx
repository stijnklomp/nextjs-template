export const sum = (...arr: number[]) =>
	[...arr].reduce((acc, val) => acc + val, 0)
