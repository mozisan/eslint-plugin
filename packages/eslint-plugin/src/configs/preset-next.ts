import type { TSESLint } from "@typescript-eslint/utils";

export default {
	extends: [
		"plugin:@next/next/core-web-vitals",
		"plugin:@mozisan/preset-react",
		"plugin:@mozisan/type-commonjs",
		"prettier",
	],
	overrides: [
		{
			files: ["app/**/*.ts?(x)", "src/app/**/*.ts?(x)"],
			rules: {
				// eslint-plugin-check-file
				"check-file/folder-naming-convention": ["error", { "**": "NEXT_JS_APP_ROUTER_CASE" }],
				"check-file/filename-naming-convention": "off",
				// eslint-plugin-import
				"import/no-default-export": "off",
			},
		},
	],
} satisfies TSESLint.Linter.Config;
