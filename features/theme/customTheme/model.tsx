import React from "react"

import {
	ExpandRecursively,
	ExpandFunctionRecursively
} from "@/features/typescript/intellisense"

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

export const ThemeModel: ExpandRecursively<TThemeModel> = {
	currentColourMode: "dark"
}

export const ThemeModelContext = React.createContext<
	ExpandRecursively<TThemeModelUse>
>({} as TThemeModelUse)

export const ThemeModelUse: ExpandFunctionRecursively<
	() => TThemeModelUse
> = () => React.useContext(ThemeModelContext)
