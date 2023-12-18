export type ReducerActionTemplate<Kind, Payload> = {
	type: Kind
	payload: Payload
}

export type ReducerStateTemplate<Model, ReducerAction> = {
	state: Model
	dispatch: React.Dispatch<ReducerAction>
}
