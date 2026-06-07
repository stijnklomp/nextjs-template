import Link from "next/link"

export default function NotFound(): React.JSX.Element {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				gap: "16px",
				padding: "24px",
				textAlign: "center",
				color: "var(--color-text-primary)",
				background: "var(--color-bg-primary)",
			}}>
			<h1
				style={{
					fontSize: "72px",
					fontWeight: 700,
					color: "var(--color-accent-primary)",
				}}>
				404
			</h1>
			<h2 style={{ fontSize: "24px", fontWeight: 600 }}>
				Page not found
			</h2>
			<p style={{ color: "var(--color-text-secondary)" }}>
				The page you are looking for does not exist.
			</p>
			<Link
				href="/"
				style={{
					padding: "10px 20px",
					borderRadius: "8px",
					background: "var(--color-button-primary-bg)",
					color: "var(--color-button-primary-text)",
					textDecoration: "none",
					fontWeight: 500,
					marginTop: "8px",
				}}>
				Go home
			</Link>
		</div>
	)
}
