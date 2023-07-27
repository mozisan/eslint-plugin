const { configs } = require(".");

/** @type {import("@typescript-eslint/utils/dist").TSESLint.Linter.Config} */
module.exports = {
	...configs.preset,
	root: true,
	overrides: [
		...configs.preset.overrides,
		{
			files: ["*.ts"],
			rules: {
				"import/no-default-export": "off",
			},
		},
	],
};
