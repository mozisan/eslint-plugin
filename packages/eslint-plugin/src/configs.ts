import type { TSESLint } from "@typescript-eslint/utils";

import cjs from "./configs/cjs";
import cjsModern from "./configs/cjs-modern";
import esm from "./configs/esm";
import overrides from "./overrides";

export = {
	cjs,
	"cjs-modern": cjsModern,
	esm,
	...overrides,
} satisfies Record<string, TSESLint.Linter.Config>;
