"use client"

import { Button, Group, Stack, Text, Title, Card } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { IconBrandTabler, IconBell, IconPlayerPlay } from "@tabler/icons-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function Showcase(): React.JSX.Element {
	const t = useTranslations("showcase")

	return (
		<Stack gap="xl" style={{ maxWidth: 800, margin: "0 auto" }}>
			<Section title={t("notifications.title")}>
				<Group gap="sm">
					<Button
						variant="filled"
						onClick={() =>
							notifications.show({
								title: "Success",
								message: "This is a success notification.",
								color: "teal",
							})
						}>
						{t("notifications.success")}
					</Button>
					<Button
						variant="filled"
						color="red"
						onClick={() =>
							notifications.show({
								title: "Error",
								message: "This is an error notification.",
								color: "red",
							})
						}>
						{t("notifications.error")}
					</Button>
					<Button
						variant="filled"
						color="grape"
						onClick={() =>
							notifications.show({
								title: "With icon",
								message: "Notifications can have custom icons.",
								icon: <IconBell size={18} />,
								color: "grape",
							})
						}>
						{t("notifications.withIcon")}
					</Button>
					<Button
						variant="outline"
						onClick={() => {
							const id = notifications.show({
								loading: true,
								title: "Loading",
								message: "Will auto-update in 2s...",
								autoClose: false,
								withCloseButton: false,
							})
							setTimeout(() => {
								notifications.update({
									id,
									loading: false,
									title: "Done",
									message: "Update complete!",
									color: "teal",
									autoClose: 2000,
								})
							}, 2000)
						}}>
						{t("notifications.asyncProgress")}
					</Button>
				</Group>
			</Section>

			<Section title={t("icons.title")}>
				<Group gap="md">
					<IconBrandTabler size={32} />
					<IconBell size={32} />
					<IconPlayerPlay size={32} />
				</Group>
				<Text c="dimmed" size="sm">
					{t("icons.description")}
				</Text>
			</Section>

			<Section title={t("motion.title")}>
				<Group gap="md">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}>
						<Button variant="filled">{t("motion.fadeIn")}</Button>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}>
						<Button variant="outline">{t("motion.hoverMe")}</Button>
					</motion.div>

					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}>
						<Button variant="light" radius="xl">
							{t("motion.spinning")}
						</Button>
					</motion.div>
				</Group>
			</Section>
		</Stack>
	)
}

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}): React.JSX.Element {
	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			style={{
				background: "var(--color-bg-primary)",
				border: "1px solid var(--color-border-primary)",
			}}>
			<Stack gap="md">
				<Title order={2} style={{ color: "var(--color-text-primary)" }}>
					{title}
				</Title>
				{children}
			</Stack>
		</Card>
	)
}

Showcase.displayName = "Showcase"
