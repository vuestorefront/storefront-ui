import { BasePage } from '../../utils/BasePage';

export default class VsfLoaderLinearSizesBaseObject extends BasePage {
  hasAriaLabel(ariaLabel) {
    this.container.should('have.attr', 'aria-label', ariaLabel);
    return this;
  }
}
