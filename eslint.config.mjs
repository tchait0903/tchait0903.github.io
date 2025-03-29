import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { "@eslint/js": js }, rules: js.configs.recommended.rules },
  tseslint.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { react: pluginReact }, rules: pluginReact.configs.recommended.rules, settings: { react: { version: "19.0.0" } } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { "@next/next": nextPlugin }, rules: nextPlugin.configs.recommended.rules },
  reactHooks.configs["recommended-latest"]
]);