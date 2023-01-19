import { BasePage } from '../../utils/BasePage';

export default class VsfInputObject extends BasePage {

  hasLabel(label: string) {
    this.labelElement.contains(label);
    return this;
  }

  doesNotHaveLabel() {
    this.labelElement.should('not.exist');
    return this;
  }

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

  hasReadonly() {
    this.inputElement.should('have.attr', 'readonly');
  }

  hasRequiredText(text: string) {
    this.requiredElement.contains(text);
    return this;
  }

  hasHelpText(text: string) {
    this.helpElement.contains(text);
    return this;
  }

  hasInvalidText(text: string) {
    this.invalidElement.contains(text);
    return this;
  }

  hasPlaceholder() {
    this.inputElement.should('have.attr', 'placeholder');
    return this;
  }

  hasCharsCount(value: number) {
    this.charsCountElement.contains(value);
  }

  get inputElement() {
    return this.findTestElement('input-field');
  }

  get labelElement() {
    return this.findTestElement('input-label');
  }

  get requiredElement() {
    return this.findTestElement('input-required-text');
  }

  get helpElement() {
    return this.findTestElement('input-help-text');
  }

  get invalidElement() {
    return this.findTestElement('input-error-text');
  }

  get charsCountElement() {
    return this.findTestElement('input-chars-count');
  }
}
