import type { TSESLint } from "@typescript-eslint/utils";

export default {
	overrides: [
		{
			files: ["*.?(m)ts?(x)"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": ["error", { "**": "+([_$0-9a-z])?(.+([0-9a-z]))" }],
				"check-file/folder-naming-convention": ["error", { "**": "SNAKE_CASE" }],
				// eslint-plugin-import-access
				"import-access/jsdoc": "error",
			},
		},
		{
			files: ["*.config.?(m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": "off",
			},
		},
	],
} satisfies TSESLint.Linter.Config;
