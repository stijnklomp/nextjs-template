import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ThemeProvider } from "@/lib/theme"
import { ThemeToggle } from "@/components/ui/theme-toggle"

function renderWithProviders(
	ui: React.ReactElement,
): ReturnType<typeof render> {
	return render(<ThemeProvider>{ui}</ThemeProvider>)
}

describe("ThemeToggle", () => {
	it("renders the toggle button with current mode label", () => {
		renderWithProviders(<ThemeToggle />)

		const button = screen.getByRole("button", { name: /switch to/i })
		expect(button).toBeInTheDocument()
	})

	it("toggles theme label on click", async () => {
		const user = userEvent.setup()
		renderWithProviders(<ThemeToggle />)

		const button = screen.getByRole("button", { name: /switch to/i })
		const initialLabel = button.getAttribute("aria-label")

		await user.click(button)

		const newLabel = button.getAttribute("aria-label")
		expect(newLabel).not.toBe(initialLabel)
	})
})
