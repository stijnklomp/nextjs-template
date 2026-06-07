export default function Loading(): React.JSX.Element {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				color: "var(--color-text-secondary)",
				background: "var(--color-bg-primary)",
			}}>
			<div
				style={{
					width: "40px",
					height: "40px",
					border: "4px solid var(--color-border-primary)",
					borderTopColor: "var(--color-accent-primary)",
					borderRadius: "50%",
					animation: "spin 1s linear infinite",
				}}
			/>
			<style>{`
				@keyframes spin {
					to { transform: rotate(360deg); }
				}
			`}</style>
		</div>
	)
}
