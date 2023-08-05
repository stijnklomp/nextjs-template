"use client"
import React from "react"

import {
	SumDispatchContext,
	SumReducer,
	TSumDispatch,
	TSumModel,
	SumAction,
	SumActionType
} from "./model"
import { SumButtons } from "./button"
// import { sum } from ".."

export const sumReducer = (state: TSumModel, action: SumAction): TSumModel => {
	const { type, payload } = action

	switch (type) {
		case SumActionType.INCREASE:
			return {
				...state,
				// sum: sum(state.sum + payload)
				sum: state.sum + payload
			}
		case SumActionType.DECREASE:
			return {
				...state,
				// sum: sum(state.sum - payload)
				sum: state.sum - payload
			}
		default:
			return state
	}
}

export const SumComponent = (): JSX.Element => {
	const { Provider }: { Provider: React.Provider<TSumDispatch> } =
		SumDispatchContext

	const [state, dispatch]: [TSumModel, React.Dispatch<SumAction>] =
		SumReducer()

	return (
		<Provider value={{ state, dispatch }}>
			<SumButtons />
			<h1>{state.sum}</h1>
		</Provider>
	)
}

SumComponent.displayName = "Summerize Component"
