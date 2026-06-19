import config from "stijnklomp-linting-formatting-config/dist/index.js"
import { configNext } from "stijnklomp-linting-formatting-config/dist/configs/next.js"
import { includeIgnoreFile } from "@eslint/compat"
import tseslint from "typescript-eslint"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseConfig = await config({
	strict: true,
	tsconfigRootDir: __dirname,
	typescript: true,
	configs: {
		jest: true,
		markdownCodeBlocks: false,
	},
})

const finalConfig = [...baseConfig]

finalConfig.push(...(await configNext({ tsconfigRootDir: __dirname })))

finalConfig.push({
	files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mjs"],
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			projectService: true,
			tsconfigRootDir: __dirname,
		},
	},
	name: "typescript-eslint parser for .ts/.tsx/.js/.jsx/.mjs",
})

finalConfig.push({
	files: ["**/*.ts", "**/*.tsx", "**/*.js"],
	plugins: {
		"@typescript-eslint": tseslint.plugin,
	},
	settings: {
		react: {
			version: "19.0",
		},
	},
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			{
				format: ["camelCase"],
				selector: "default",
			},
			{
				format: ["camelCase", "UPPER_CASE", "PascalCase"],
				selector: "variable",
			},
			{
				format: ["camelCase", "PascalCase"],
				selector: "function",
			},
			{
				format: ["camelCase"],
				leadingUnderscore: "allow",
				selector: "parameter",
			},
			{
				format: ["PascalCase"],
				selector: "typeLike",
			},
			{
				format: ["camelCase", "PascalCase"],
				selector: "import",
			},
			{
				selector: "objectLiteralProperty",
				format: null,
				filter: {
					regex: "^[0-9]+$",
					match: true,
				},
			},
		],
	},
})

const gitignorePath = path.resolve(__dirname, ".gitignore")
finalConfig.push(includeIgnoreFile(gitignorePath), {
	ignores: [
		".prettierrc.js",
		"eslint.config.js",
		"jest.config.ts",
		"playwright.config.ts",
		"postcss.config.cjs",
		"next.config.mjs",
		"next-env.d.ts",
		".next/",
		".opencode/",
		"Dockerfile",
		"scripts/",
		"typedoc.config.js",
	],
})

finalConfig.push({
	languageOptions: {
		parserOptions: {
			projectService: true,
			tsconfigRootDir: __dirname,
		},
	},
	name: "Override @typescript-eslint parserOptions",
})

export default finalConfig
