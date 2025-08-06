import js from "@eslint/js";
import cypress from "eslint-plugin-cypress";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly",
        context: "readonly",
        expect: "readonly",
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      "no-undef": "off", // Desactiva los errores de "variable no definida"
    },
  },
];