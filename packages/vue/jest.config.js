module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@storefront-ui/shared/*).+(js)$"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
  },
  modulePathIgnorePatterns: ["scripts"],
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/*.spec.js"],
};
