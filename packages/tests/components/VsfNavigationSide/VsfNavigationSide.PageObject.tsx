import { BasePage } from '../../utils/BasePage';

export default class VsfSideSheetBaseObject extends BasePage {

  clickCloseButton(){
    this.closeButton.click();
    return this;
  }

  isClosed() {
    this.container.should('not.contain.html');
    return this;
  }

  hasLogoAriaLabel() {
    this.logoElement.should('have.attr', 'aria-label');
    return this;
  }

  hasCloseAriaLabel() {
    this.closeButton.should('have.attr', 'aria-label');
    return this;
  }

  get closeButton() {
    return this.findTestElement('navigation-side-close-button')
  }

  get logoElement() {
    return this.findTestElement('navigation-side-logo')
  }
}
