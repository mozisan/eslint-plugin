import type { TSESLint } from "@typescript-eslint/utils";

export default {
	extends: ["plugin:@mozisan/preset"],
	settings: {
		react: {
			version: "detect",
		},
	},
	overrides: [
		{
			files: ["*.tsx"],
			extends: [
				"plugin:import/react",
				"plugin:react/recommended",
				"plugin:react/jsx-runtime",
				"plugin:react-perf/recommended",
				"prettier",
			],
			rules: {
				// eslint-plugin-react
				"react/button-has-type": "error",
				"react/iframe-missing-sandbox": "error",
				"react/jsx-boolean-value": "error",
				"react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
				"react/jsx-sort-props": [
					"error",
					{ callbacksLast: true, noSortAlphabetically: true, reservedFirst: ["key", "ref"] },
				],
				"react/self-closing-comp": "error",
			},
		},
		{
			files: ["*.?(m)ts?(x)"],
			plugins: ["react-hooks"],
			rules: {
				// eslint-plugin-react-hooks
				"react-hooks/rules-of-hooks": "error",
				"react-hooks/exhaustive-deps": "error",
			},
		},
	],
} satisfies TSESLint.Linter.Config;
