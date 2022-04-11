module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    "eslint:recommended",
  ],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-multiple-empty-lines": ["error", { max: 2 }],
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
};