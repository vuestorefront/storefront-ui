import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    framework: "react",
  },
  component: {
    video: false,
    port: 3004,
    specPattern: "sfui/tests/**/*.{cy,spec}.{js,ts,jsx,tsx}",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
