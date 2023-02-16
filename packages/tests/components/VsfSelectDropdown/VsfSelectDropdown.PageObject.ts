import { BasePage } from '../../utils/BasePage';

export default class VsfSelectDropdownBaseObject extends BasePage {
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

  isDisabled() {
    this.container.should('have.class', 'vsf-select-dropdown--disabled');
    return this;
  }

  hasLabel(label: string) {
    this.container.contains(label);
    return this;
  }

  get requiredElement() {
    return this.findTestElement('select-dropdown-required-text');
  }

  get helpElement() {
    return this.findTestElement('select-dropdown-help-text');
  }

  get invalidElement() {
    return this.findTestElement('select-dropdown-error-text');
  }
}
