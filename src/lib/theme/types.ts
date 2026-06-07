export type TTheme = "dark" | "light"

export type TThemeModel = {
	currentColourMode: TTheme
}

export const ThemeModel: TThemeModel = {
	currentColourMode: "dark",
}

export type TThemeModelInit = [
	TThemeModel,
	React.Dispatch<React.SetStateAction<TThemeModel>>,
]

export type TThemeModelUse = {
	data: TThemeModelInit[0]
	setThemeModel: TThemeModelInit[1]
}
