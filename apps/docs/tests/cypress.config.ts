import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: './fixtures',
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 20000,
  video: false,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:8080/v2/',
    specPattern: '../tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: '../tests/support/index.ts'
  }
});
