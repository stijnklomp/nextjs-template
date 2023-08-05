"use client"
import React from "react"

import {
	MainNavbarDispatchContext,
	UseReducer,
	TModel,
	TMainNavbarModel,
	CountActionKind,
	MyAction
} from "./model"

export const mainNavbarReducer = (
	state: TMainNavbarModel,
	action: MyAction
): TMainNavbarModel => {
	const { type, payload } = action

	switch (type) {
		case CountActionKind.INCREASE:
			return {
				...state,
				value: state.count + payload
			}
		case CountActionKind.DECREASE:
			return {
				...state,
				value: state.count - payload
			}
		default:
			return state
	}
}

export const NavigationComponent = (): JSX.Element => {
	const { Provider }: { Provider: React.Provider<TModel> } =
		MainNavbarDispatchContext

	const [state, dispatch]: [TMainNavbarModel, React.Dispatch<MyAction>] =
		UseReducer()

	return (
		<>
			<Provider value={{ state, dispatch }}></Provider>
		</>
	)
}
