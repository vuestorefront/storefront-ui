import { BasePage } from '../../utils/BasePage';

export default class VsfCheckboxObject extends BasePage {

  hasLabel(label: string) {
    this.labelElement.contains(label);
    return this;
  }

  doesNotHaveLabel() {
    this.labelElement.should('be.empty');
    return this;
  }

  isChecked() {
    this.inputElement.inputCheck();
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

  get inputElement() {
    return this.findTestElement('checkbox-input');
  }

  get labelElement() {
    return this.findTestElement('checkbox-label');
  }

  get placeholderElement() {
    return this.findTestElement('checkbox-placeholder');
  }

  get requiredElement() {
    return this.findTestElement('checkbox-required-text');
  }

  get helpElement() {
    return this.findTestElement('checkbox-help-text');
  }

  get invalidElement() {
    return this.findTestElement('checkbox-error-text');
  }

}
