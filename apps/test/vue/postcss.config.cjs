// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require("autoprefixer");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require("@tailwindcss/postcss");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [postcssImport, tailwindcss, autoprefixer],
};
