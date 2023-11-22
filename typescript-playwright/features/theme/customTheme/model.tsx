import React from "react"

type TTheme = "dark" | "light"

export type TThemeModel = {
	currentColourMode: TTheme
}

export type TThemeModelInit = [
	TThemeModel,
	React.Dispatch<React.SetStateAction<TThemeModel>>
]

export type TThemeModelUse = {
	data: TThemeModelInit[0]
	setThemeModel: TThemeModelInit[1]
}

export const ThemeModel: TThemeModel = {
	currentColourMode: "dark"
}

export const ThemeModelContext = React.createContext<TThemeModelUse>(
	{} as TThemeModelUse
)

export const ThemeModelUse: () => TThemeModelUse = () =>
	React.useContext(ThemeModelContext)
