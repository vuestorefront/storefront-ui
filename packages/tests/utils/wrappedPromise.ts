export const wrappedPromise = <T>(name: string, fn: () => Promise<T>) =>
  cy.wrap(name).then(() => new Cypress.Promise<T>((resolve) => fn().then(resolve)));
