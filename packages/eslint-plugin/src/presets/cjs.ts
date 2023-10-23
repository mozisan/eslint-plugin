import type { TSESLint } from "@typescript-eslint/utils";

export default {
	extends: ["plugin:@mozisan/(base)", "plugin:@mozisan/(classic)"],
	overrides: [
		{
			files: ["*.?(c)js"],
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "script",
			},
			env: {
				node: true,
			},
			rules: {
				// eslint-plugin-unicorn
				"unicorn/prefer-module": "off",
			},
		},
		{
			files: ["*.mjs"],
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
