import type { TSESLint } from "@typescript-eslint/utils";

export default {
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": ["error", { "**": "KEBAB_CASE" }],
				"check-file/folder-naming-convention": ["error", { "**": "KEBAB_CASE" }],
				// eslint-plugin-import-access
				"import-access/jsdoc": [
					"error",
					{ indexLoophole: false, filenameLoophole: true, defaultImportability: "package" },
				],
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
