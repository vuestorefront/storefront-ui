import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import postcssImport from "postcss-import";

export default {
  plugins: [postcssImport, tailwindcss, autoprefixer],
}
