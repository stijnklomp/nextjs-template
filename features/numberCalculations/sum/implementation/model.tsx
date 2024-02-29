import React from "react"

import { ReducerActionTemplate, ReducerStateTemplate } from "types/model"

type SumModel = {
	sum: number
}

export type SumModelInit = [
	SumModel,
	React.Dispatch<React.SetStateAction<SumModel>>
]

export enum SumActionType {
	INCREASE,
	DECREASE
}

type SumAction = ReducerActionTemplate<SumActionType, number>

type TSumDispatch = ReducerStateTemplate<SumModel, SumAction>

export type SumReducerType = (state: SumModel, action: SumAction) => SumModel

export const SumDispatchContext = React.createContext({} as TSumDispatch)

export const SumDispatchUse = () => React.useContext(SumDispatchContext)
