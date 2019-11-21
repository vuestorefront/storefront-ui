module.exports = {
  env: {
    jest: true,
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  plugins: ["vue"]
}
