module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    "@vue/prettier",
  ],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-multiple-empty-lines": ["error", { max: 2 }],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
