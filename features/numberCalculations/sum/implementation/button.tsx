import { SumDispatchUse, SumActionType } from "./model"

export const SumButtons = () => {
	const { dispatch } = SumDispatchUse()

	const buttonClicked = ({ type }: { type: SumActionType }) => {
		dispatch({ type, payload: 2 })
	}

	return (
		<h1>
			<div
				onClick={() => buttonClicked({ type: SumActionType.DECREASE })}>
				-
			</div>
			<div
				onClick={() => buttonClicked({ type: SumActionType.INCREASE })}>
				+
			</div>
		</h1>
	)
}

SumButtons.displayName = "Sum button"
