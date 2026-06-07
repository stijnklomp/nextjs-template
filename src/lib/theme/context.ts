"use client"

import { createContext, useContext } from "react"

import type { TThemeModelUse } from "./types"

export const ThemeContext = createContext<TThemeModelUse>({
	data: { currentColourMode: "dark" },
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setThemeModel: () => {},
})

export function useTheme(): TThemeModelUse {
	return useContext(ThemeContext)
}
