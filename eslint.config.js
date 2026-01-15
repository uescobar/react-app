// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import typescriptEslint from "typescript-eslint"; // v8

export default [
  js.configs.recommended,

  // Reglas base para TS (incluye parser y buenas prácticas)
  ...typescriptEslint.configs.recommended, // v8: preset de flat config

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        // Para monorepos o TSConfig(s) con paths, activa el servicio de proyecto:
        // projectService: true,
      },
      globals: {
        document: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs["recommended-latest"].rules,
      "react-refresh/only-export-components": "warn",
    },
  },
];
