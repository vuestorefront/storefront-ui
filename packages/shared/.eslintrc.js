module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: ["prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    sourceType: "module"
  }
};
