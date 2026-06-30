import { getRequestConfig } from "next-intl/server"
import en from "../../messages/en.json"
import nl from "../../messages/nl.json"

import { routing } from "./routing"

const messages = { en, nl }

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	if (!locale || !routing.locales.includes(locale as "en" | "nl")) {
		locale = routing.defaultLocale
	}

	return {
		locale,
		messages: messages[locale as keyof typeof messages],
	}
})
