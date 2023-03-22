import { BasePage } from '../../utils/BasePage';

export default class SfAccordionItemBaseObject extends BasePage {
  hasSummary(label: string) {
    this.summaryElement.contains(label);
    return this;
  }

  hasContent(content: string) {
    this.container.contains(content);
    return this;
  }

  isOpen() {
    this.container.then((el) => {
      expect((el[0] as HTMLDetailsElement).open).to.be.true;
    });
    return this;
  }

  isNotOpen() {
    this.container.then((el) => {
      expect((el[0] as HTMLDetailsElement).open).to.be.false;
    });
    return this;
  }

  clickSummary(spy: Cypress.Agent<sinon.SinonSpy>, open: boolean) {
    this.summaryElement.click();
    cy.then(() => {
      expect(spy).calledOnceWith(open);
    });
    return this;
  }

  hasClassName(className: string) {
    this.container.should('have.class', className);
    return this;
  }

  hasSummaryClassName(className: string) {
    this.summaryElement.should('have.class', className);
    return this;
  }

  get summaryElement() {
    return this.container.get('summary');
  }
}
