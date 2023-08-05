import { MainNavbarDispatchUse, CountActionKind } from "./model"

export const SumButtons = ({
	children
}: {
	children: React.ReactNode
}): JSX.Element => {
	const { state, dispatch } = MainNavbarDispatchUse()

	const buttonClicked = ({ type }: { type: CountActionKind }) => {
		dispatch({ type, payload: 4 })
	}

	return (
		<h1>
			<div
				onClick={() =>
					buttonClicked({ type: CountActionKind.DECREASE })
				}>
				-
			</div>
			<div
				onClick={() =>
					buttonClicked({ type: CountActionKind.DECREASE })
				}>
				+
			</div>
		</h1>
	)
}

SumButtons.displayName = "App Layout"
