/// <reference path="../../../node_modules/cypress/types/index.d.ts" />

export class BasePage<T extends HTMLElement = HTMLElement> {
  protected containerTestId: string;

  constructor(containerTestId: string) {
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
    return (cy.get<T>(`[data-testid="${this.containerTestId}"]`) || cy.get('body')) as Cypress.Chainable<JQuery<T>>;
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
    cy.get(`[data-testid="${this.containerTestId}"]`, {
      timeout: 200,
    }).should('not.exist');
    return this;
  }

  exists() {
    this.container.should('exist');
    return this;
  }

  hasIcon(iconLabel: string) {
    this.container.find(`[data-testid="${iconLabel}"]`);
    return this;
  }

  click() {
    this.container.click();
    return this;
  }

  clickOutside(height?: number) {
    this.cyRoot.then((el) => {
      el[0].style.height = `${height || Cypress.config().viewportHeight}px`;
    });
    cy.get('body').click('bottom');
    return this;
  }

  contains(text: string) {
    this.container.contains(text);
    return this;
  }

  haveNoContent() {
    this.container.should('not.have.text');
    return this;
  }

  hasClass(className: string) {
    this.container.should('have.class', className);
    return this;
  }

  makeSnapshot(config?: Parameters<typeof cy.matchImage>[1]) {
    cy.matchImage(config);
    return this;
  }

  hasTag(tagName: string) {
    this.container.then((el) => {
      expect(el[0].tagName).to.equal(tagName);
    });
    return this;
  }

  mouseOver() {
    this.container.trigger('mouseover');
    this.container.trigger('mouseenter');
    return this;
  }

  mouseOut() {
    this.container.trigger('mouseout');
    this.container.trigger('mouseleave');
    return this;
  }

  get cyRoot() {
    return cy.get('[data-cy-root]');
  }
}
