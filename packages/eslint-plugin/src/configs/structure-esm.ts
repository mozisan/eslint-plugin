import type { TSESLint } from "@typescript-eslint/utils";

export default {
	overrides: [
		{
			files: ["*.?(m)ts?(x)"],
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
			files: ["*.config.?(m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/filename-naming-convention": "off",
			},
		},
	],
} satisfies TSESLint.Linter.Config;
