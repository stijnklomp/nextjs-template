"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { NavigationProgress } from "@mantine/nprogress"
import { nprogress, completeNavigationProgress } from "@mantine/nprogress"

export { nprogress }

export function RouterProgress(): React.JSX.Element {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		completeNavigationProgress()
	}, [pathname, searchParams])

	return <NavigationProgress />
}

RouterProgress.displayName = "RouterProgress"
