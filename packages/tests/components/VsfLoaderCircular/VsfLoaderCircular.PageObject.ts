import { BasePage } from '../../utils/BasePage';

export default class VsfLoaderBaseObject extends BasePage {
  hasAriaLabel(ariaLabel: string) {
    this.container.should('have.attr', 'aria-label', ariaLabel);
    return this;
  }
}
