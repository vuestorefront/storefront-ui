import { defineConfig } from 'cypress';

export default defineConfig({
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
    baseUrl: 'https://docs.storefrontui.io/v2/vue/customization',
    specPattern: '../tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: '../tests/support/index.ts'
  }
});
