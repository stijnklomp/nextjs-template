import type { Metadata } from "next"

export const metadata: Metadata = {
	icons: {
		apple: "/icon.svg",
	},
	manifest: "/manifest.json",
	themeColor: "#0a0a0a",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): React.JSX.Element {
	return <>{children}</>
}
