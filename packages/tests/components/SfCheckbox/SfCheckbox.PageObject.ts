import { BasePage } from '../../utils/BasePage';

export default class SfCheckboxObject extends BasePage {
  isChecked() {
    this.container.check();
    return this;
  }

  isDisabled() {
    this.container.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.container.should('not.be.disabled');
    return this;
  }

  hasInvalidStyle() {
    this.container.should('have.class', 'border-negative-700');
    return this;
  }
}
