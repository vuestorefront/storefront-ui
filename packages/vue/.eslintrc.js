module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    "@vue/prettier"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier.printWidth": 120
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
