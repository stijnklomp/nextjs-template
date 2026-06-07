"use client"

import { useEffect } from "react"

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<html>
			<body
				style={{
					color: "var(--color-text-primary)",
					background: "var(--color-bg-primary)",
				}}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						minHeight: "100vh",
						gap: "16px",
						padding: "24px",
					}}>
					<h1 style={{ fontSize: "24px", fontWeight: 600 }}>
						Something went wrong!
					</h1>
					<p style={{ color: "var(--color-text-secondary)" }}>
						{error.message ?? "An unexpected error occurred"}
					</p>
					<button
						type="button"
						onClick={reset}
						style={{
							padding: "10px 20px",
							borderRadius: "8px",
							border: "1px solid var(--color-border-primary)",
							background: "var(--color-bg-secondary)",
							color: "var(--color-text-primary)",
							cursor: "pointer",
							fontWeight: 500,
						}}>
						Try again
					</button>
				</div>
			</body>
		</html>
	)
}
