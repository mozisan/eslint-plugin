import type { TSESLint } from "@typescript-eslint/utils";

export default {
	extends: ["plugin:@mozisan/preset-react"],
	settings: {
		tailwindcss: {
			callees: ["classnames", "clsx", "cn", "ctl", "cva", "twJoin", "twMerge", "tv"],
		},
	},
	overrides: [
		{
			files: ["*.tsx"],
			plugins: ["tailwindcss"],
			rules: {
				"tailwindcss/enforces-negative-arbitrary-values": "error",
				"tailwindcss/enforces-shorthand": "error",
				"tailwindcss/migration-from-tailwind-2": "error",
				"tailwindcss/no-custom-classname": "error",
				"tailwindcss/no-contradicting-classname": "error",
			},
		},
	],
} satisfies TSESLint.Linter.Config;
