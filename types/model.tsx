export type ReducerActionTemplate<Kind, Payload = unknown> = {
	type: Kind
	payload: Payload
}

export type ReducerStateTemplate<Model, ReducerAction> = {
	state: Model
	dispatch: React.Dispatch<ReducerAction>
}
