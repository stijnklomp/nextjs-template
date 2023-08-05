import { Inter } from "next/font/google"

import "@/features/theme/global.scss"
import { CustomThemeWrapper } from "@/features/theme/customTheme/"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "nextjs-template",
	description:
		"Project template for creating web applications with Typescript and NextJs"
}

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<html lang="en">
		<body className={inter.className}>
			<CustomThemeWrapper>{children}</CustomThemeWrapper>
		</body>
	</html>
)

Layout.displayName = "App Layout"

export default Layout
