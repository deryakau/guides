const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ],
  globals: {
    React: "readonly",
    JSX: "readonly",
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project: [project],
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles and build artifacts
    "*.js",
    "node_modules/",
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    },
  ],
};
