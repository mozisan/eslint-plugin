import type { TSESLint } from "@typescript-eslint/utils";

import base from "./bases/base.js";
import classic from "./bases/classic.js";
import modern from "./bases/modern.js";

export default {
	"(base)": base,
	"(classic)": classic,
	"(modern)": modern,
} satisfies Record<string, TSESLint.Linter.Config>;
