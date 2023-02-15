import { BasePage } from '../../utils/BasePage';

export default class VsfListItemFilterChipBaseObject extends BasePage {
  isDisabled() {
    this.inputElement.should('be.disabled');
    return this;
  }

  hasCounter(counter: string) {
    this.counterElement.contains(counter);
    return this;
  }

  isChecked() {
    this.inputElement.check({ force: true });
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

  hasBackgroundColor(color: string) {
    this.imageElement.should('have.css', 'background-color', color);
    return this;
  }

  hasBackgroundImage(image: string) {
    this.imageElement.should('have.css', 'background-image', image);
    return this;
  }

  get inputElement() {
    return this.findTestElement('chip-input');
  }

  get imageElement() {
    return this.findTestElement('chip-thumbnail');
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
