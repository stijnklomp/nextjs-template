"use client"

import { useTheme } from "@/lib/theme"
import styles from "./styles.module.scss"

export function ThemeToggle(): React.JSX.Element {
	const { data, setThemeModel } = useTheme()

	const toggleTheme = (): void => {
		setThemeModel((prev) => ({
			currentColourMode:
				prev.currentColourMode === "dark" ? "light" : "dark",
		}))
	}

	return (
		<button
			className={styles.toggle}
			onClick={toggleTheme}
			aria-label={`Switch to ${data.currentColourMode === "dark" ? "light" : "dark"} mode`}
			type="button">
			<span className={styles.icon}>
				{data.currentColourMode === "dark" ? "☀️" : "🌙"}
			</span>
			<span className={styles.label}>
				{data.currentColourMode === "dark" ? "Light" : "Dark"} Mode
			</span>
		</button>
	)
}

ThemeToggle.displayName = "ThemeToggle"
