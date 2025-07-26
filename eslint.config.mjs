import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      // desabilita semi
      semi: ["error", "never"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": ["error"],
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }],
      "import/newline-after-import": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "function", next: "*" }
      ],
    }
  }
]
export default eslintConfig
