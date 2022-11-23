import vue from "@vitejs/plugin-vue";
import { defineConfig, searchForWorkspaceRoot } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [
        // https://vitejs.dev/config/server-options.html#server-fs-allow problem with workspace symlinked dependencies
        searchForWorkspaceRoot(process.cwd()),
      ]
    }
  },
  plugins: [
    vue(),
    {
      name: "replace-react-imports",
      enforce: "pre",
      async transform(code, id) {
        // Alter only test files with *.cy.tsx file extension
        if (!/^[^.]+.cy.tsx$/.test(id)) return { code };

        const REGEX = new RegExp("import(.*)from.*../frameworks/react.*", "gm");
        if (REGEX.test(code)) {
          const REGEX_TYPES = new RegExp(
            "(import.*from.*../frameworks/)(react)(.*/types.*)",
            "gm"
          );

          const changedCode = code
            // Find imports of component and replace it with utils/fake-import.ts empty file
            .replace(REGEX, (_match, g1) => {
              return `import${g1}from '../../utils/fake-import';`;
            })
            // Find all `vue/../types` files and replace it to `react/../types` so we would test correct package
            .replace(REGEX_TYPES, (_match, g1, g2, g3) => {
              return `${g1}vue${g3}`;
            });

          return {
            code: changedCode,
          };
        }
        return { code };
      },
    },
  ],
  resolve: {
    dedupe: ["vue"],
  },
});
