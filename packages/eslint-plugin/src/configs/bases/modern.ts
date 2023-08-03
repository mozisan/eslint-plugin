import type { TSESLint } from "@typescript-eslint/utils";

export = {
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-check-file
				"check-file/folder-naming-convention": ["error", { "**": "KEBAB_CASE" }],
				// eslint-plugin-import-access
				"import-access/jsdoc": [
					"error",
					{ indexLoophole: false, filenameLoophole: true, defaultImportability: "package" },
				],
				// eslint-plugin-unicorn
				"unicorn/filename-case": ["error", { case: "kebabCase" }],
			},
		},
	],
} satisfies TSESLint.Linter.Config;
