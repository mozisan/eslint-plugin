import type { TSESLint } from "@typescript-eslint/utils";

export = {
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": ["error", { "**": "+([_$0-9a-z])?(.+([0-9a-z]))" }],
				"check-file/folder-naming-convention": ["error", { "**": "SNAKE_CASE" }],
				// eslint-plugin-import-access
				"import-access/jsdoc": "error",
			},
		},
		{
			files: ["*.config.?(c|m)ts"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": "off",
			},
		},
	],
} satisfies TSESLint.Linter.Config;
