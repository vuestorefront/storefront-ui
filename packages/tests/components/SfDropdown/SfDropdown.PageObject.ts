import { BasePage } from '../../utils/BasePage';

export default class SfDropdownObject extends BasePage {
  isDropdownHidden() {
    this.dropdown.should('not.exist');
    return this;
  }

  isDropdownVisible() {
    this.dropdown.should('be.visible');
    return this;
  }

  hasTriggerButton() {
    this.container.get('button').should('be.visible');
    return this;
  }

  clickAway(spy: Cypress.Agent<sinon.SinonSpy>) {
    cy.get('body').click();
    cy.then(() => {
      expect(spy).calledOnceWith();
    });
    return this;
  }

  clickEscape(spy: Cypress.Agent<sinon.SinonSpy>) {
    // Must use trigger as a button element due to .type() method specs
    // https://docs.cypress.io/api/commands/type#Supported-Elements
    this.container.get('button').type('{esc}');
    cy.then(() => {
      expect(spy).calledOnceWith();
    });
    return this;
  }

  get dropdown() {
    return this.getTestElement('dropdown-content');
  }
}
