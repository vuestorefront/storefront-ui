import { BasePage } from '../../utils/BasePage';

export default class VsfSelectObject extends BasePage {

  hasLabel(label: string) {
    this.labelElement.contains(label);
    return this;
  }

  doesNotHaveLabel() {
    this.labelElement.should('be.empty');
    return this;
  }

  isDisabled(){
    this.inputElement.should('be.disabled');
    return this;
  }

  isNotDisabled(){
    this.inputElement.should('not.be.disabled');
    return this;
  }

  isRequired(){
    this.inputElement.should('have.attr', 'required');
    return this;
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

  hasPlaceholder(placeholder: string) {
    this.placeholderElement.contains(placeholder);
    return this;
  }

  hasSelectedOption(option){
    this.inputElement.select(option);
    return this;
  }

  get inputElement() {
    return this.findTestElement('select-input');
  }

  get labelElement() {
    return this.findTestElement('select-label');
  }

  get placeholderElement() {
    return this.findTestElement('select-placeholder');
  }

  get requiredElement() {
    return this.findTestElement('select-required-text');
  }

  get helpElement() {
    return this.findTestElement('select-help-text');
  }

  get invalidElement() {
    return this.findTestElement('select-invalid-text');
  }

}
