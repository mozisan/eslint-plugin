const { configs } = require(".");

const config = configs["cjs-modern"];

/** @type {import("@typescript-eslint/utils/dist").TSESLint.Linter.Config} */
module.exports = {
	...config,
	root: true,
	overrides: [
		...config.overrides,
		{
			files: ["*.ts"],
			rules: {
				"import/no-default-export": "off",
				"unicorn/prefer-module": "off",
			},
		},
	],
};
