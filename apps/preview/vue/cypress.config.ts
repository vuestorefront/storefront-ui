import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    framework: "vue",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    specPattern: "src/components/sfui/tests/**/*.{cy,spec}.{js,ts,jsx,tsx}",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    experimentalSingleTabRunMode: true,
  },
});
