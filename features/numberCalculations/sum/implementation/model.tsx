// import React from "react"

// import {
// 	ExpandOneLevel,
// 	ExpandRecursively
// } from "@/features/typescript/intellisense"

// export type TMainNavbarPage = "projects" | "project" | "clip" | "login"

// export type TMainNavbarModel = {
// 	page: TMainNavbarPage
// 	project: string
// 	clip: string
// }

// export type TMainNavbarModelInit = [
// 	ExpandRecursively<TMainNavbarModel>,
// 	React.Dispatch<React.SetStateAction<TMainNavbarModel>>
// ]

// type TModel = {
// 	data: TMainNavbarModelInit[0]
// 	setMainNavbarModel: TMainNavbarModelInit[1]
// }

// export type TMainNavbarModelUse = ExpandRecursively<TModel>

// export const MainNavbarModel: ExpandRecursively<TMainNavbarModel> = {
// 	page: "projects",
// 	project: "",
// 	clip: ""
// }

// export const MainNavbarModelContext: React.Context<TMainNavbarModelInit> =
// 	React.createContext({} as TMainNavbarModelInit)

// export const MainNavbarModelUse: () => ExpandOneLevel<TMainNavbarModelInit> =
// 	() => React.useContext(MainNavbarModelContext)

import React from "react"

import { mainNavbarReducer } from "./index"

export type TMainNavbarModel = {
	sum: number
}

export type TMainNavbarModelInit = [
	TMainNavbarModel,
	React.Dispatch<React.SetStateAction<TMainNavbarModel>>
]

export type MyAction = {
	type: CountActionKind
	payload: unknown
}

export type TMainNavbarDispatch = {
	state: TMainNavbarModelInit[0]
	dispatch: React.Dispatch<MyAction>
}

export enum CountActionKind {
	INCREASE = "INCREASE",
	DECREASE = "DECREASE"
}

export const UseReducer: () => [
	TMainNavbarModel,
	React.Dispatch<MyAction>
] = () =>
	React.useReducer(mainNavbarReducer, {
		sum: 0
	})

export const MainNavbarDispatchContext: React.Context<TMainNavbarDispatch> =
	React.createContext({} as TMainNavbarDispatch)

export const MainNavbarDispatchUse: () => TMainNavbarDispatch = () =>
	React.useContext(MainNavbarDispatchContext)
