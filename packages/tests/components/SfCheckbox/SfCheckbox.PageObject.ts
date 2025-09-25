import { BasePage } from '../../utils/BasePage';

export default class SfCheckboxObject extends BasePage {
  isChecked() {
    this.container.find('input').check({ force: true });
    return this;
  }

  isDisabled() {
    this.container.find('input').should('be.disabled', { force: true });
    return this;
  }

  isNotDisabled() {
    this.container.find('input').should('not.be.disabled', { force: true });
    return this;
  }

  hasInvalidStyle() {
    this.container.should('have.class', 'text-negative-700 hover:text-negative-800 active:text-negative-900');
    return this;
  }
}
