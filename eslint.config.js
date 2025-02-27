import tseslint from "typescript-eslint";

export default tseslint.config({
  extends: [tseslint.configs.recommended],
  ignores: ["node_modules", "dist", "build", ".github"],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    // General rules
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-unused-vars": "off", // Handled by TypeScript
    "prefer-const": "warn",

    // TypeScript specific rules
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-empty-function": "warn",

    // Best practices
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-var": "error",
  },
});
