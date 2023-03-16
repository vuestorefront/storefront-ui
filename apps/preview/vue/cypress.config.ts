import { defineConfig } from "cypress";

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === "true";
const singleFile = process.env.SPEC ? `${process.env.SPEC}/` : "";
export default defineConfig({
  env: {
    framework: "vue",
    coverage: isCoverageEnabled,
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    specPattern: `src/components/sfui/tests/components/${singleFile}**/*.cy.tsx`,
    fixturesFolder: "src/components/sfui/tests/fixtures",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    experimentalSingleTabRunMode: true,
    setupNodeEvents(on, config) {
      isCoverageEnabled && require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
});
