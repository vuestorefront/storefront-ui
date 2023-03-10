import { BasePage } from '../../utils/BasePage';

export default class VsfProgressLinearBaseObject extends BasePage {
  hasValue(value: number) {
    this.container.should('have.value', value);
    return this;
  }

  hasAriaLabel(label: string) {
    this.container.should('have.attr', 'aria-label', label);
    return this;
  }
}
