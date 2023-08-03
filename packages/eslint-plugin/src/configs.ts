import type { TSESLint } from "@typescript-eslint/utils";

import cjs from "./configs/cjs";
import cjsModern from "./configs/cjs-modern";
import esm from "./configs/esm";
import esmClassic from "./configs/esm-classic";
import overrides from "./overrides";

export = {
	cjs,
	"cjs-modern": cjsModern,
	esm,
	"esm-classic": esmClassic,
	...overrides,
} satisfies Record<string, TSESLint.Linter.Config>;
