import { BasePage } from '../../utils/BasePage';

export default class VsfDialogBaseObject extends BasePage<HTMLDialogElement> {
  isClosed() {
    this.container.then((el) => {
      expect(el[0].open).to.be.false;
    });
    return this;
  }

  isOpened() {
    this.container.then((el) => {
      expect(el[0].open).to.be.true;
    });
    return this;
  }

  hasCloseButton() {
    this.closeButtonElement.should('exist');
    return this;
  }

  haveNotCloseButton() {
    this.closeButtonElement.should('not.exist');
    return this;
  }

  clickCloseButton() {
    this.closeButtonElement.click();
    return this;
  }

  get closeButtonElement() {
    return this.findTestElement('button');
  }
}
