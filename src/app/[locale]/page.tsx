import { Button, Group, Stack, Text, Title, Badge } from "@mantine/core"
import { getTranslations } from "next-intl/server"

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Showcase } from "@/components/ui/showcase"
import { LocaleSwitcher } from "@/components/ui/locale-switcher"

export default async function HomePage(): Promise<React.JSX.Element> {
	const t = await getTranslations("home")

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				background: "var(--color-bg-secondary)",
				color: "var(--color-text-primary)",
			}}>
			<header
				style={{
					position: "sticky",
					top: 0,
					zIndex: 50,
					padding: "16px 24px",
					background: "var(--color-bg-primary)",
					borderBottom: "1px solid var(--color-border-primary)",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<Title order={3} style={{ color: "var(--color-text-primary)" }}>
					nextjs-template
				</Title>
				<Group gap="sm">
					<LocaleSwitcher />
					<ThemeToggle />
				</Group>
			</header>

			<main style={{ flex: 1, padding: "48px 24px" }}>
				<Stack gap="xl" style={{ maxWidth: 800, margin: "0 auto" }}>
					<Stack gap="sm">
						<Title
							order={1}
							style={{ color: "var(--color-text-primary)" }}>
							{t("title")}
						</Title>
						<Text style={{ color: "var(--color-text-secondary)" }}>
							{t("subtitle")}
						</Text>
					</Stack>

					<Group gap="sm">
						<Badge variant="filled" color="blue">
							Next.js 16
						</Badge>
						<Badge variant="filled" color="teal">
							TypeScript
						</Badge>
						<Badge variant="filled" color="violet">
							Mantine
						</Badge>
						<Badge variant="filled" color="orange">
							PostCSS
						</Badge>
						<Badge variant="filled" color="pink">
							Motion
						</Badge>
						<Badge variant="filled" color="cyan">
							Tabler Icons
						</Badge>
						<Badge variant="filled" color="yellow">
							i18n
						</Badge>
					</Group>

					<Showcase />

					<Group gap="sm" justify="center">
						<Button
							component="a"
							href="https://nextjs.org/docs"
							target="_blank"
							variant="outline">
							Next.js Docs
						</Button>
						<Button
							component="a"
							href="https://mantine.dev"
							target="_blank"
							variant="outline">
							Mantine Docs
						</Button>
					</Group>
				</Stack>
			</main>

			<footer
				style={{
					padding: "24px",
					textAlign: "center",
					borderTop: "1px solid var(--color-border-primary)",
					background: "var(--color-bg-primary)",
					color: "var(--color-text-tertiary)",
					fontSize: "14px",
				}}>
				{t("footer")}
			</footer>
		</div>
	)
}
