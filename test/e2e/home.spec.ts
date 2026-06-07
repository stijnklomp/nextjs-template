import { test, expect } from "@playwright/test"

test.describe("Home page", () => {
	test("renders the heading", async ({ page }) => {
		await page.goto("/en")

		await expect(
			page.getByRole("heading", {
				name: /welcome to your next\.js template/i,
			}),
		).toBeVisible()
	})

	test("theme toggle switches between dark and light mode", async ({
		page,
	}) => {
		await page.goto("/en")

		const toggle = page.getByRole("button", { name: /switch to/i })
		await toggle.click()

		await expect(toggle).toHaveAttribute(
			"aria-label",
			/switch to dark mode|switch to light mode/,
		)
	})

	test("locale switcher changes language", async ({ page }) => {
		await page.goto("/en")

		await page.getByRole("button", { name: /switch to nl/i }).click()

		await expect(page).toHaveURL(/\/nl/)
	})
})
