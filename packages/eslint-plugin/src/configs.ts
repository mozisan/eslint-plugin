import type { TSESLint } from "@typescript-eslint/utils";

import preset from "./configs/preset";
import presetNext from "./configs/preset-next";
import presetReact from "./configs/preset-react";
import presetTailwindCSS from "./configs/preset-tailwindcss";
import structureESM from "./configs/structure-esm";
import structureNode from "./configs/structure-node";
import typeCommonJS from "./configs/type-commonjs";
import typeModule from "./configs/type-module";

export const configs: Record<string, TSESLint.Linter.Config> = {
	preset,
	"preset-next": presetNext,
	"preset-react": presetReact,
	"preset-tailwindcss": presetTailwindCSS,
	"structure-esm": structureESM,
	"structure-node": structureNode,
	"type-commonjs": typeCommonJS,
	"type-module": typeModule,
};
