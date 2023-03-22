import { BasePage } from '../../utils/BasePage';

export default class SfSelectObject extends BasePage {
  isDisabled() {
    this.inputElement.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.inputElement.should('not.be.disabled');
    return this;
  }

  isRequired() {
    this.inputElement.should('have.attr', 'required');
    return this;
  }

  hasPlaceholder(placeholder: string) {
    this.placeholderElement.contains(placeholder);
    return this;
  }

  hasSelectedOption(option) {
    this.inputElement.select(option);
    return this;
  }

  get inputElement() {
    return this.findTestElement('select-input');
  }

  get placeholderElement() {
    return this.findTestElement('select-placeholder');
  }
}
