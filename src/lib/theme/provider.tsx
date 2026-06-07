"use client"

import { useState } from "react"
import { MantineProvider } from "@mantine/core"

import { ThemeContext } from "./context"
import { ThemeModel } from "./types"
import type { TThemeModel, TThemeModelInit } from "./types"

export function ThemeProvider({
	children,
}: {
	children: React.ReactNode
}): React.JSX.Element {
	const [themeModelObj, setThemeModel]: TThemeModelInit =
		useState<TThemeModel>(ThemeModel)

	return (
		<ThemeContext.Provider
			value={{
				data: themeModelObj,
				setThemeModel,
			}}>
			<div id={themeModelObj.currentColourMode}>
				<MantineProvider
					forceColorScheme={themeModelObj.currentColourMode}>
					{children}
				</MantineProvider>
			</div>
		</ThemeContext.Provider>
	)
}
