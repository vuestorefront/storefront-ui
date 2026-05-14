import { defineConfig } from 'cypress';

const docsBaseUrl = process.env.DOCS_BASE_URL || 'http://localhost:3000';

export default defineConfig({
  e2e: {
    baseUrl: docsBaseUrl,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: false,
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 10000,
  },
});
