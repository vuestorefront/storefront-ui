import vue from "rollup-plugin-vue";
import node from "@rollup/plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

import fs from "fs";
import path from "path";

const baseFolder = "./src/components/";

const components = fs
  .readdirSync(baseFolder)
  .filter((f) => fs.statSync(path.join(baseFolder, f)).isDirectory());

const entries = {
  index: "./src/index.js",
  helpers: "./src/utilities/helpers/index.js",
  directives: "./src/utilities/directives/index.js",
  "mobile-observer": "./src/utilities/mobile-observer.js",
  ...components.reduce((obj, name) => {
    obj[name] = baseFolder + name;
    return obj;
  }, {}),
};

const babelOptions = {
  babelHelpers: "bundled",
};

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: "condense",
    },
  },
};

export default () => {
  let config = [
    {
      input: entries,
      external: ["vue"],
      output: {
        format: "esm",
        dir: `dist/esm`,
      },
      plugins: [
        node({
          extensions: [".vue", ".js"],
        }),
        vue(vuePluginConfig),
        babel(babelOptions),
        cjs(),
        postcss(),
      ],
    },
    {
      input: "src/index.js",
      external: ["vue"],
      output: {
        format: "esm",
        file: "dist/storefront-ui.esm.js",
        inlineDynamicImports: true,
      },
      plugins: [
        node({
          extensions: [".vue", ".js"],
        }),
        vue(vuePluginConfig),
        babel(babelOptions),
        cjs(),
        postcss(),
      ],
    },
  ];

  if (process.env.MINIFY === "true") {
    config = config.filter((c) => !!c.output.file);
    config.forEach((c) => {
      c.output.file = c.output.file.replace(/\.js/g, ".min.js");
      c.plugins.push(
        terser({
          output: {
            comments: "/^!/",
          },
        })
      );
    });
  }
  return config;
};
