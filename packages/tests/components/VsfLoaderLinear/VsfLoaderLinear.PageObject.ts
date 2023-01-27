import { VsfLoaderLinearSize, VsfLoaderSize } from '@storefront-ui/vue/components/VsfLoaderLinear/types';
import { BasePage } from '../../utils/BasePage';

export default class VsfLoaderLinearSizesBaseObject extends BasePage {
  hasSizeClass(size: VsfLoaderLinearSize | VsfLoaderSize) {
    this.container.should('have.class', `vsf-loader-linear--${size}`);
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

  get screenReaderElement() {
    return this.findTestElement('loader-sr');
  }
}
