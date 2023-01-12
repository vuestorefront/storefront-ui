import { BasePage } from '../../utils/BasePage';

export default class VsfRadioGroupObject extends BasePage {
  hasId() {
    this.container.should('have.attr', 'id');
    return this;
  }

  isRequired() {
    this.container.should('have.attr', 'aria-required');
    return this;
  }

  isInvalid() {
    this.container.should('have.attr', 'aria-invalid');
    return this;
  }

  hasLegend(text: string) {
    this.legendElement.contains(text);
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

  hasErrorText(text: string) {
    this.errorElement.contains(text);
    return this;
  }

  get legendElement() {
    return this.findTestElement('radio-group-legend');
  }

  get requiredElement() {
    return this.findTestElement('radio-group-required');
  }

  get helpElement() {
    return this.findTestElement('radio-group-help');
  }

  get errorElement() {
    return this.findTestElement('radio-group-error');
  }
}
