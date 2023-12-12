module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    // 接入prettier的规则
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": ["off"]
    // Overcome https://github.com/mysticatea/eslint-plugin-node/issues/250
    // "node/no-unsupported-features/es-syntax": [
    //   "error",
    //   {
    //     version: 4,
    //     ignores: ["module", "dynamicImport", "index", "defaultParameters"]
    //   }
    // ]
  },
  root: true
};
