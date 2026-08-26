import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "no-debugger": "off",
      semi: ["error", "always"],
      eqeqeq: "error",
      "no-unused-vars": "error",
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  },
]);
