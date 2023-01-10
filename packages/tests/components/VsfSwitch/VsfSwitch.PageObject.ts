import { BasePage } from '../../utils/BasePage';

export default class VsfSwitchObject extends BasePage {
  hasLabel(label: string) {
    this.labelElement.contains(label);
    return this;
  }

  doesNotHaveLabel() {
    this.labelElement.should('be.empty');
    return this;
  }

  isChecked() {
    this.inputElement.check();
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

  hasHelpText(text: string) {
    this.helpElement.contains(text);
    return this;
  }

  get inputElement() {
    return this.findTestElement('checkbox-input');
  }

  get labelElement() {
    return this.findTestElement('checkbox-label');
  }

  get helpElement() {
    return this.findTestElement('checkbox-help-text');
  }
}
