export const wrappedPromise = <PromiseType>(name: string, fn: () => Promise<PromiseType>) =>
  cy.wrap(name).then(() => new Cypress.Promise<PromiseType>((resolve) => fn().then(resolve)));
