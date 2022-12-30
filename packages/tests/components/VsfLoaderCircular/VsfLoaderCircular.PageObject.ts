import { VsfLoaderSizes } from '../../../sfui/frameworks/react/components/VsfLoaderCircular/types';
import { BasePage } from '../../utils/BasePage';

export default class VsfLoaderBaseObject extends BasePage {
  hasSizeClass(size: VsfLoaderSizes) {
    this.circularLoaderCircleElement.should('have.class', `vsf-loader-circular--${size}`);
    return this;
  }

  containScreenReaderText(screenReaderText: string) {
    this.screenReaderElement.contains(screenReaderText);
    return this;
  }

  get circularLoaderCircleElement() {
    return this.findTestElement('loader-circular-circle');
  }

  get screenReaderElement() {
    return this.findTestElement('loader-sr');
  }
}
