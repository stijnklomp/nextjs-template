"use client"
import React from "react"

import { ThemeModelContext, ThemeModel, TThemeModelInit } from "./model"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export const CustomThemeWrapper = ({
	children
}: {
	children: React.ReactNode
}): JSX.Element => {
	const [themeModelObj, setThemeModel]: TThemeModelInit =
		React.useState(ThemeModel)

	return (
		<ThemeModelContext.Provider
			value={{
				data: themeModelObj,
				setThemeModel
			}}>
			<div id={themeModelObj.currentColourMode}>{children}</div>
		</ThemeModelContext.Provider>
	)
}
