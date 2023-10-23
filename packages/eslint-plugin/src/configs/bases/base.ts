import type { TSESLint } from "@typescript-eslint/utils";

export = {
	extends: ["eslint:recommended", "plugin:import/recommended", "plugin:unicorn/recommended", "prettier"],
	plugins: ["simple-import-sort", "unused-imports"],
	rules: {
		// eslint
		eqeqeq: ["error", "always", { null: "never" }],
		"max-params": "error",
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-param-reassign": "error",
		"no-restricted-imports": [
			"error",
			{ patterns: [{ group: ["**/_*", "!./_*"], message: "Do not import directory-private module." }] },
		],
		"no-useless-rename": "error",
		"object-shorthand": "error",
		"prefer-destructuring": "error",
		// eslint-plugin-import
		"import/export": "off",
		"import/first": "error",
		"import/namespace": "off",
		"import/newline-after-import": "error",
		"import/no-anonymous-default-export": ["error", { allowArray: true, allowObject: true }],
		"import/no-duplicates": "error",
		"import/no-unresolved": "off",
		"import/no-useless-path-segments": "error",
		// eslint-plugin-simple-import-sort
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					["^\\u0000"], // Side effect imports
					["^node:"], // Built-in packages
					["^[^#~]@?\\w"], // Third party packages
					["^[#~]"], // Internal imports
					["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Relative imports
				],
			},
		],
		// eslint-plugin-unicorn
		"unicorn/filename-case": "off",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-null": "off",
		"unicorn/prefer-object-from-entries": "off",
		"unicorn/prevent-abbreviations": "off",
		// eslint-plugin-unused-imports
		"no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"error",
			{ args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" },
		],
	},
	overrides: [
		{
			files: ["*.?(c|m)ts?(x)"],
			excludedFiles: ["*.d.?(c|m)ts"],
			extends: [
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/stylistic-type-checked",
				"plugin:import/typescript",
				"prettier",
			],
			parserOptions: {
				ecmaVersion: "latest",
				project: true,
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ["check-file", "functional", "import-access", "no-relative-import-paths"],
			settings: {
				"import/internal-regex": "^(#|~)/",
			},
			rules: {
				// @typescript-eslint/eslint-plugin
				"@typescript-eslint/consistent-type-definitions": ["error", "type"],
				"@typescript-eslint/consistent-type-exports": "error",
				"@typescript-eslint/consistent-type-imports": "error",
				"@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
				"@typescript-eslint/naming-convention": [
					"error",
					{
						selector: "default",
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allow",
						trailingUnderscore: "forbid",
					},
					{
						selector: "parameter",
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allow",
						trailingUnderscore: "forbid",
					},
					{
						selector: ["objectLiteralProperty", "typeProperty"],
						format: ["camelCase", "PascalCase", "UPPER_CASE"],
						leadingUnderscore: "allowDouble",
						trailingUnderscore: "forbid",
					},
					{
						selector: "typeLike",
						format: ["PascalCase", "UPPER_CASE"],
						leadingUnderscore: "forbid",
						trailingUnderscore: "forbid",
					},
					{
						selector: [
							"classProperty",
							"objectLiteralProperty",
							"typeProperty",
							"classMethod",
							"objectLiteralMethod",
							"typeMethod",
							"accessor",
							"enumMember",
						],
						modifiers: ["requiresQuotes"],
						format: null,
					},
				],
				"@typescript-eslint/no-import-type-side-effects": "error",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": ["error", { allow: ["_"] }],
				"@typescript-eslint/no-unnecessary-qualifier": "error",
				"@typescript-eslint/no-unused-vars": "off",
				"@typescript-eslint/no-useless-empty-export": "error",
				"@typescript-eslint/parameter-properties": "error",
				"@typescript-eslint/prefer-readonly": "error",
				"@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }],
				"@typescript-eslint/return-await": ["error", "always"],
				"@typescript-eslint/strict-boolean-expressions": [
					"error",
					{ allowString: false, allowNumber: false, allowNullableObject: false },
				],
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				// eslint-plugin-functional
				"functional/immutable-data": "error",
				"functional/prefer-property-signatures": "error",
				"functional/prefer-readonly-type": "error",
				// eslint-plugin-import
				"import/no-default-export": "error",
				// eslint-plugin-no-relative-import-paths
				"no-relative-import-paths/no-relative-import-paths": ["error", { allowSameFolder: true }],
			},
		},
		{
			files: ["*.config.?(m)ts", "vitest.*.?(m)ts"],
			excludedFiles: ["*.d.?(c|m)ts"],
			rules: {
				// eslint-plugin-import
				"import/no-default-export": "off",
			},
		},
	],
	reportUnusedDisableDirectives: true,
} satisfies TSESLint.Linter.Config;
