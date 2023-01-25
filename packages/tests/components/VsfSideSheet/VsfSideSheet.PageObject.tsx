import { BasePage } from '../../utils/BasePage';

export default class VsfSideSheetBaseObject extends BasePage {
  isPermanent() {
    this.asideElement.should('not.have.class', 'vsf-side-sheet--fixed');
    return this;
  }

  isOnRightSide() {
    this.asideElement.should('have.class', 'vsf-side-sheet__aside--right-side');
    return this;
  }

  isOnLeftSide() {
    this.asideElement.should('have.class', 'vsf-side-sheet__aside--left-side');
    return this;
  }

  hasCloseButton() {
    this.closeButton.should('be.visible');
    return this;
  }

  hasOverlay() {
    this.overlayElement.should('exist');
    return this;
  }

  doesNotHaveCloseButton() {
    this.closeButton.should('not.be.visible');
    return this;
  }

  closeButtonIsClicked() {
    this.closeButton.click();
    return this;
  }

  isClosed() {
    this.asideElement.should('not.exist');
    return this;
  }

  get asideElement() {
    return this.findTestElement('side-sheet-aside');
  }
  get closeButton() {
    return this.findTestElement('side-sheet-close-button');
  }

  get overlayElement() {
    return this.findTestElement('side-sheet-overlay');
  }
}
