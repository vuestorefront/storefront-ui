import { BasePage } from '../../utils/BasePage';

export default class VsfLoaderBaseObject extends BasePage {
  hasSizeClass(size) {
    this.circularLoader.should('have.class', `vsf-loader__circular--${size}`)
    return this;
  }

  containScreenReaderText(screenReaderText) {
    this.screenReaderElement.contains(screenReaderText);
    return this;
  } 

  get circularLoader() {
    return this.findTestElement('loader-circular')
  }

  get screenReaderElement() {
    return this.findTestElement('loader-sr')
  }

}
