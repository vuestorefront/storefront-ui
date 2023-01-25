import { BasePage } from '../../utils/BasePage';

export default class VsfAccordionItemBaseObject extends BasePage {
  clickHeader() {
    this.headerSummaryElement.click();
    return this;
  }

  hasHeader(label: string) {
    this.headerSummaryElement.contains(label);
    return this;
  }

  doesNotHaveHeader() {
    this.headerSummaryElement.should('be.empty');
    return this;
  }

  hasContent(content: string) {
    this.contentElement.contains(content);
    return this;
  }

  doesNotHaveContent() {
    this.contentElement.should('be.empty');
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

  get headerSummaryElement() {
    return this.findTestElement('accordion-item-title');
  }

  get contentElement() {
    return this.findTestElement('accordion-item-content');
  }
}
