import React from "react"

import { sumReducer } from "./index"

export type TSumModel = {
	sum: number
}

export type TSumModelInit = [
	TSumModel,
	React.Dispatch<React.SetStateAction<TSumModel>>
]

export type SumAction = {
	type: SumActionType
	payload: number
}

export type TSumDispatch = {
	state: TSumModelInit[0]
	dispatch: React.Dispatch<SumAction>
}

export enum SumActionType {
	INCREASE,
	DECREASE
}

export const SumReducer: () => [TSumModel, React.Dispatch<SumAction>] = () =>
	React.useReducer(sumReducer, {
		sum: 0
	})

export const SumDispatchContext: React.Context<TSumDispatch> =
	React.createContext({} as TSumDispatch)

export const SumDispatchUse: () => TSumDispatch = () =>
	React.useContext(SumDispatchContext)
