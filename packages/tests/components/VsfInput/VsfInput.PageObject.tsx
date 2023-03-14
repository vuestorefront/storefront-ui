import { BasePage } from '../../utils/BasePage';

export default class VsfInputObject extends BasePage {
  isDisabled() {
    this.inputElement.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.inputElement.should('not.be.disabled');
    return this;
  }

  hasReadonly() {
    this.inputElement.should('have.attr', 'readonly');
  }

  hasPlaceholder() {
    this.inputElement.should('have.attr', 'placeholder');
    return this;
  }

  hasValue(value: string) {
    this.inputElement.should('have.value', value);
  }

  get inputElement() {
    return this.findTestElement('input-field');
  }
}
