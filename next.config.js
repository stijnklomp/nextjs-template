/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	modularizeImports: {
		"@mui/icons-material": {
			transform: "@mui/icons-material/{{member}}"
		}
	},
	typescript: {
		ignoreBuildErrors: true
	}
}

export default nextConfig
