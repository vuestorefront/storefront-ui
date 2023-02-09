import vue from "@vitejs/plugin-vue";
import { defineConfig, searchForWorkspaceRoot, type PluginOption } from "vite";
import {
  extractImports,
  changeImports,
  dynamicImports,
  removeCode,
  changeFrameworkPathInImports,
} from "@storefront-ui/tests-shared";
import istanbul from "vite-plugin-istanbul";
import path from "path";
import nycConfig from "./.nycrc.json";

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === "true";
const changeImport = (code: string, framework: "react") => {
  // Find imports of component and replace it with utils/fake-import.ts empty file
  const EXTRACT_IMPORTS = extractImports(framework);
  const CHANGE_IMPORTS = changeImports(framework);
  const DYNAMIC_IMPORTS = dynamicImports(framework);

  return code.replace(EXTRACT_IMPORTS, (_m, frameworkImport: string) => {
    return frameworkImport
      .replace(DYNAMIC_IMPORTS, "./fake-import")
      .replace(CHANGE_IMPORTS, (_m, importName: string) => {
        return `import${importName}from '../../utils/fake-import';`;
      });
  });
};

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

        const changedCode = changeImport(code, "react")
          .replace(REMOVE_REGEX, "")
          // Find all imports with `/react/` files and replace it to `/vue/` so we would test correct package
          .replace(REGEX_FRAMEWORK, (_match, g1, g2, g3) => {
            return `${g1}/vue/${g3}`;
          });

        return {
          code: changedCode,
        };
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
    ...(isCoverageEnabled && {
      // Unfortunately we cant do alias directly to packages/sfui/frameworks/vue because node_modules are hardcode excluded from cypress, nyc and code_coverage. And we cant change cwd for nyc(available in cli) because @cypress/code-coverage hardoce cwd where we have package.json https://github.com/cypress-io/code-coverage/blob/706dd66d3450236af9f1dba037dfc1e1fcd5e6d5/task.js#L20
      alias: [
        {
          find: "@storefront-ui/vue",
          replacement: path.resolve(
            __dirname,
            "src",
            "components",
            "sfui",
            "vue"
          ),
        },
      ],
    }),
  },
});
