import { BasePage } from '../../utils/BasePage';

export default class VsfListItemFilterSwitchBaseObject extends BasePage {
  isDisabled() {
    this.inputElement.should('be.disabled');
    return this;
  }

  hasCounter(counter: string) {
    this.counterElement.contains(counter);
    return this;
  }

  isChecked() {
    this.inputElement.check();
    return this;
  }

  hasTruncateOn() {
    this.secondaryTextElement.should('have.class', 'vsf-list-item-menu__secondary-text--truncated');
    return this;
  }

  doesNotHaveCounter() {
    this.counterElement.should('not.exist');
    return this;
  }

  hasSecondaryText(text: string) {
    this.secondaryTextElement.contains(text);
    return this;
  }

  doesNotHaveSecondaryText() {
    this.secondaryTextElement.should('not.exist');
    return this;
  }

  hasLabel(label: string) {
    this.labelElement.contains(label);
    return this;
  }

  doesNotHaveLabel() {
    this.labelElement.should('not.exist');
    return this;
  }

  get inputElement() {
    return this.findTestElement('checkbox-input');
  }

  get labelElement() {
    return this.findTestElement('list-item-menu-label');
  }

  get counterElement() {
    return this.findTestElement('list-item-menu-counter');
  }

  get secondaryTextElement() {
    return this.findTestElement('list-item-menu-secondary-text');
  }
}
