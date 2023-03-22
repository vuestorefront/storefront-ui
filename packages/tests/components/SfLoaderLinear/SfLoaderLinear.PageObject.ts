import { BasePage } from '../../utils/BasePage';

export default class SfLoaderLinearSizesBaseObject extends BasePage {
  hasAriaLabel(ariaLabel) {
    this.container.should('have.attr', 'aria-label', ariaLabel);
    return this;
  }
}
