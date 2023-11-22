"use client"
import React from "react"

import { ThemeModelContext, ThemeModel, TThemeModelInit } from "./model"

const CustomThemeWrapper = ({
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

CustomThemeWrapper.displayName = "Custom theme wrapper"

export { CustomThemeWrapper }
