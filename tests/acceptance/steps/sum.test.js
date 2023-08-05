const { openBrowser, closeBrowser, goto, click, press } = require("taiko")
// import { openBrowser, closeBrowser, goto, click, press } from "taiko"

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
