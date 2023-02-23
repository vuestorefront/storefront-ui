import { defineConfig } from 'cypress';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === "true";
const singleFile = process.env.SPEC ? `${process.env.SPEC}/` : "";
export default defineConfig({
  env: {
    framework: 'react',
    coverage: isCoverageEnabled,
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    port: 3004,
    specPattern: `sfui/tests/components/${singleFile}**/*.{cy,spec}.{js,ts,jsx,tsx}`,
    fixturesFolder: "sfui/tests/fixtures",
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    experimentalSingleTabRunMode: true,
    setupNodeEvents(on, config) {
      isCoverageEnabled && require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
});
