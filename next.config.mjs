import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import("next").NextConfig} */
const nextConfig = {
	output: "standalone",
	allowedDevOrigins: ["*.*.*.*"],
	experimental: {
		optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
	},
}

export default withNextIntl(nextConfig)
