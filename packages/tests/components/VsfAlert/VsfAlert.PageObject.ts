import { BasePage } from '../../utils/BasePage';

export default class VsfAlertBaseObject extends BasePage<HTMLDivElement> {
  isClosed() {
    return this.isNotVisible();
  }

  isOpened() {
    return this.isVisible();
  }

  hasCloseButton() {
    this.closeButtonElement.should('exist');
    return this;
  }

  hasNoCloseButton() {
    this.closeButtonElement.should('not.exist');
    return this;
  }

  clickCloseButton() {
    this.closeButtonElement.click();
    return this;
  }

  headerContains(content: string) {
    this.headerElement.contains(content);
    return this;
  }

  get headerElement() {
    return this.findTestElement('alert-header');
  }

  get closeButtonElement() {
    return this.findTestElement('alert-close-button');
  }
}
