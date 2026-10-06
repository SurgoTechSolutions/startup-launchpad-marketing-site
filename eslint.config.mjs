import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** Blocks imports from a component layer above the one being linted. */
const layerRule = (forbidden) => ({
  "no-restricted-imports": [
    "error",
    {
      patterns: forbidden.map((layer) => ({
        group: [`@/components/${layer}`, `@/components/${layer}/*`, `../../${layer}/*`],
        message: `This layer must not import from ${layer}. See the atomic structure rules.`,
      })),
    },
  ],
});

export default defineConfig(
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**", "design/**", "next-env.d.ts"],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ["src/components/atoms/**"],
    rules: layerRule(["molecules", "organisms", "templates"]),
  },
  {
    files: ["src/components/molecules/**"],
    rules: layerRule(["organisms", "templates"]),
  },
  {
    files: ["src/components/organisms/**"],
    rules: layerRule(["templates"]),
  },
);
