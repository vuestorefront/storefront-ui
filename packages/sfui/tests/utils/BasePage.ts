/// <reference path="../../../../node_modules/cypress/types/index.d.ts" />

export class BasePage {
  protected containerTestId: string;

  constructor(containerTestId: string, container?: Cypress.Chainable) {
    this.containerTestId = containerTestId;

    // Log page object method name in cypress test, for easier readibility and debugging
    return new Proxy(this, {
      get<T extends Parameters<typeof Reflect.get>[0]>(target: T, p: string | symbol, ...args: unknown[]) {
        const methodName = String(p);
        if (RegExp(/(^has|^does|^is|click|type)/i).exec(methodName)) {
          const className = target.constructor.name.replace('PageObject', '');
          cy.log(`${className}.${methodName}`);
        }
        return Reflect.get(target, p, ...args);
      },
    });
  }

  protected get container() {
    return cy.get(`[data-testid="${this.containerTestId}"]`) || cy.get('body');
  }

  protected findTestElement(containerTestId: string, container = this.container) {
    return container.find(`[data-testid="${containerTestId}"]`);
  }

  protected getTestElement(containerTestId: string) {
    return cy.get(`[data-testid="${containerTestId}"]`);
  }

  isVisible() {
    this.container.should('be.visible');
    return this;
  }

  isNotVisible() {
    cy.get(`[data-testid="${this.containerTestId}"]`,{ timeout: 200 }).should('not.exist');
    return this;
  }

  exists() {
    this.container.should('exist');
    return this;
  }

  hasIcon(iconLabel: string) {
    this.container.find(`[aria-label="${iconLabel}"]`);
    return this;
  }

  click() {
    this.container.click();
  }

  check() {
    this.container.check();
  }

  select(value) {
    this.container.select(value);
  }

  makeSnapshot(name?: string, opts?: Parameters<typeof cy.percySnapshot>[1]) {
    cy.percySnapshot(name, opts);
    return this;
  }

  get cyRoot() {
    return cy.get('[data-cy-root]');
  }
}
