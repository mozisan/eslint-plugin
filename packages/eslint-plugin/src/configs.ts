import type { TSESLint } from "@typescript-eslint/utils";

import bases from "./bases";
import overrides from "./overrides";
import presets from "./presets";

export default {
	...bases,
	...presets,
	...overrides,
} satisfies Record<string, TSESLint.Linter.Config>;
