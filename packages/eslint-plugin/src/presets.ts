import type { TSESLint } from "@typescript-eslint/utils";

import cjs from "./presets/cjs.js";
import cjsModern from "./presets/cjs-modern.js";
import esm from "./presets/esm.js";
import esmClassic from "./presets/esm-classic.js";

export default {
	cjs,
	"cjs-modern": cjsModern,
	esm,
	"esm-classic": esmClassic,
} satisfies Record<string, TSESLint.Linter.Config>;
