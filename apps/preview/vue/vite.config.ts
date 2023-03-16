import vue from "@vitejs/plugin-vue";
import { defineConfig, searchForWorkspaceRoot, type PluginOption } from "vite";
import {
  removeCode,
  changeFrameworkPathInImports,
} from "@storefront-ui/tests-shared";
import istanbul from "vite-plugin-istanbul";
import path from "path";
import nycConfig from "./.nycrc.json";
import { existsSync } from "fs";

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === "true";
const vueComponentsPath = isCoverageEnabled
  ? path.resolve(__dirname, "src", "components", "sfui", "vue", "index.ts")
  : path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "packages",
      "sfui",
      "frameworks",
      "vue",
      "index.ts"
    );
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [
        // https://vitejs.dev/config/server-options.html#server-fs-allow problem with workspace symlinked dependencies
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
  },
  plugins: [
    vue(),
    {
      name: "replace-react-imports",
      enforce: "pre",
      async transform(code, id) {
        // Alter only packages/sfui/tests directory files
        if (!/\/sfui\/tests\//.test(id)) return { code };

        // if more frameworks we can loop over this regex and remove code from all frameworks
        const REMOVE_REGEX = removeCode("react");
        const REGEX_FRAMEWORK = changeFrameworkPathInImports("react");

        let changedCode = code
          // 1. Remove all `// react` and `// end react` from code
          .replace(REMOVE_REGEX, "")
          // 2. Find all imports with `/react/` files and replace it to `/vue/` so we would test correct package
          .replace(REGEX_FRAMEWORK, (_match, g1, g2, g3) => {
            return `${g1}/vue/${g3}`;
          });

        return {
          code: changedCode,
        };
      },
    },
    {
      name: "add-types-to-import",
      enforce: "pre",
      async transform(code, id) {
        // Because Nuxt does not respect proper order of imports in index.ts and on initial load types file are not available when import of component is loaded first
        if (
          /\/src\/components\/sfui\/vue\/index\.ts/.test(id) ||
          /\/sfui\/frameworks\/vue\/index\.ts/.test(id)
        ) {
          code = code.replace(
            /^export \* from '\.\/components\/([^']+?)';/gm,
            (_match, componentName) => {
              const filePath = path.join(
                __dirname,
                "..",
                "..",
                "..",
                "packages",
                "sfui",
                "frameworks",
                "vue",
                "components",
                componentName,
                "types.ts"
              );
              if (!existsSync(filePath)) return _match;
              return `export * from './components/${componentName}/types';\nexport * from './components/${componentName}';`;
            }
          );

          return { code };
        }

        return null;
      },
    },
    ...(isCoverageEnabled
      ? [
          istanbul({
            ...nycConfig,
            ...(process.env.SPEC && { include: [`**/${process.env.SPEC}/**`] }),
            cypress: true,
          }) as PluginOption,
        ]
      : []),
  ],
  resolve: {
    dedupe: ["vue"],
    // Unfortunately we cant do alias directly to packages/sfui/frameworks/vue because node_modules are hardcode excluded from cypress, nyc and code_coverage. And we cant change cwd for nyc(available in cli) because @cypress/code-coverage hardoce cwd where we have package.json https://github.com/cypress-io/code-coverage/blob/706dd66d3450236af9f1dba037dfc1e1fcd5e6d5/task.js#L20
    alias: [
      {
        find: "@storefront-ui/vue",
        replacement: vueComponentsPath,
      },
      {
        find: "@storefront-ui/react",
        replacement: vueComponentsPath,
      },
    ],
  },
});
