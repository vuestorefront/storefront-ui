import { BasePage } from '../../utils/BasePage';

export default class VsfRadioGroupObject extends BasePage {

  hasLabel(label: string) {
    this.labelElement.contains(label);
    return this;
  }

  doesNotHaveLabel() {
    this.labelElement.should('be.empty');
    return this;
  }

  hasId(){
    this.parentElement.should('have.attr', 'id');
    return this;
  }
  
  isRequired(){
    this.parentElement.should('have.attr', 'aria-required');
    return this;
  }

  isInvalid(){
    this.parentElement.should('have.attr', 'aria-invalid');
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
  get parentElement() {
    return this.findTestElement('radio-group');
  }

  get labelElement() {
    return this.findTestElement('radio-group-label');
  }

  get legendElement() {
    return this.findTestElement('radio-group-legend');
  }

  get requiredElement() {
    return this.findTestElement('radio-group-required-text');
  }

  get helpElement() {
    return this.findTestElement('radio-group-help-text');
  }

  get invalidElement() {
    return this.findTestElement('radio-group-error-text');
  }

}
