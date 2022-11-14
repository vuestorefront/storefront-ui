import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: "replace-react-imports",
      enforce: "pre",
      async transform(code) {
        const REGEX = new RegExp("import(.*)from.*../frameworks/react.*", "gm");
        if (REGEX.test(code)) {
          return {
            code: code.replace(REGEX, (_match, g1) => {
              return `import${g1}from '../../utils/fake-react';`;
            }),
          };
        }
        return { code };
      },
    },
  ],
  resolve: {
    dedupe: ["vue"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
