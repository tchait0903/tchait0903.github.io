import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    ignores: [
      ".next/**",
      "out/**", 
      "node_modules/**",
      ".vercel/**",
      "*.config.js",
      "next-env.d.ts",
      "eslint.config.mjs"
    ]
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    } 
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { "@eslint/js": js }, rules: js.configs.recommended.rules },
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { react: pluginReact }, rules: pluginReact.configs.recommended.rules, settings: { react: { version: "19.0.0" } } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { "@next/next": nextPlugin }, rules: nextPlugin.configs.recommended.rules },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { "react-hooks": reactHooks }, rules: reactHooks.configs["recommended-latest"].rules },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { "jsx-a11y": jsxA11y }, rules: jsxA11y.configs.recommended.rules },
  prettierConfig
]);