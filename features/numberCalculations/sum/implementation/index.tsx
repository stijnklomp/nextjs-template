"use client"
import React from "react"

import { SumDispatchContext, SumReducerType, SumActionType } from "./model"
import { SumButtons } from "./button"
import { sum } from ".."

export const sumReducer: SumReducerType = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case SumActionType.INCREASE:
			return {
				...state,
				sum: sum(state.sum + payload)
			}
		case SumActionType.DECREASE:
			return {
				...state,
				sum: sum(state.sum - payload)
			}
		default:
			return state
	}
}

export const SumComponent = () => {
	const { Provider } = SumDispatchContext
	const [state, dispatch] = React.useReducer(sumReducer, {
		sum: 0
	})

	return (
		<Provider value={{ state, dispatch }}>
			<SumButtons />
			<h1>{state.sum}</h1>
		</Provider>
	)
}

SumComponent.displayName = "Summerize Component"
