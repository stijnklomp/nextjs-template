"use client"

import { createContext, useContext } from "react"

import type { TThemeModelUse } from "./types"

export const ThemeContext = createContext<TThemeModelUse>({
	data: { currentColourMode: "dark" },
	setThemeModel: () => {},
})

export function useTheme(): TThemeModelUse {
	return useContext(ThemeContext)
}
