import type { TSESLint } from "@typescript-eslint/utils";

import next from "./overrides/next";
import react from "./overrides/react";
import tailwindcss from "./overrides/tailwindcss";

export default {
	"+next": next,
	"+react": react,
	"+tailwindcss": tailwindcss,
} satisfies Record<string, TSESLint.Linter.Config>;
