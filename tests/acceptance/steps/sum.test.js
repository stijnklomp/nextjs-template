const { openBrowser, closeBrowser, goto } = require("taiko")

step("Add numbers", async () => {
	try {
		await openBrowser()
		await goto("localhost:3000")
	} catch (error) {
		console.error(error)
	} finally {
		await closeBrowser()
	}
})
