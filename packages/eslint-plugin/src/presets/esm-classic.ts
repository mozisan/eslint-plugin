import type { TSESLint } from "@typescript-eslint/utils";

export default {
	extends: ["plugin:@mozisan/(base)", "plugin:@mozisan/(classic)"],
	overrides: [
		{
			files: ["*.cjs"],
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "script",
			},
			env: {
				node: true,
			},
			rules: {
				// eslint-plugin-import
				"import/no-import-module-exports": "error",
				// eslint-plugin-unicorn
				"unicorn/prefer-module": "off",
			},
		},
		{
			files: ["*.?(m)js"],
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
			env: {
				node: true,
			},
		},
	],
} satisfies TSESLint.Linter.Config;
