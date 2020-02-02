module.exports = {
  env: {
    es6: true
  },
  extends: ["eslint:recommended","prettier"],
  rules: {
    "indent": ["error", 2],
    "no-multiple-empty-lines": ["error", { "max": 0 }]
  },
  parserOptions: {
    sourceType: "module"
  }
};
