"use client"

import { useLocale } from "use-intl"
import { Button, Group, Text } from "@mantine/core"
import { usePathname, useRouter } from "@/i18n/navigation"

const locales = [
	{ code: "en", label: "EN" },
	{ code: "nl", label: "NL" },
] as const

export function LocaleSwitcher(): React.JSX.Element {
	const locale = useLocale()
	const pathname = usePathname()
	const router = useRouter()

	const handleChange = (nextLocale: string): void => {
		router.replace(pathname, { locale: nextLocale })
	}

	return (
		<Group gap="xs">
			<Text size="xs" c="dimmed">
				|
			</Text>
			{locales.map((l) => (
				<Button
					key={l.code}
					variant={locale === l.code ? "filled" : "subtle"}
					size="compact-xs"
					onClick={() => handleChange(l.code)}
					aria-label={`Switch to ${l.code}`}>
					{l.label}
				</Button>
			))}
		</Group>
	)
}

LocaleSwitcher.displayName = "LocaleSwitcher"
