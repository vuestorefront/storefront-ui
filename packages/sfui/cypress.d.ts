declare global {
    namespace Cypress {
      interface Chainable {
        mount: typeof mount;
      }
    }
  }
