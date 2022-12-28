import { BasePage } from '../../utils/BasePage';

export default class VsfLoaderLinearSizesBaseObject extends BasePage {
  hasSizeClass(size) {
    this.linearLoader.should('have.class', `vsf-loader-linear--${size}`)
    return this;
  }

  setWidth(size: string) {
    this.container.invoke('attr', 'width', size);
    return this;
  }

  containScreenReaderText(screenReaderText) {
    this.screenReaderElement.contains(screenReaderText);
    return this;
  } 

  get linearLoader() {
    return this.findTestElement('loader-linear')
  }

  get screenReaderElement() {
    return this.findTestElement('loader-sr')
  }

}
