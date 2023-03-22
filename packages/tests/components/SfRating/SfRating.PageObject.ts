import { BasePage } from '../../utils/BasePage';

export default class SfRatingBaseObject extends BasePage {
  hasIconsCount(count: number) {
    this.iconElements.should('have.length', count);
    return this;
  }

  hasFilledIconsCount(count: number) {
    this.filledIconsElements.should('have.length', count);
    return this;
  }

  hasEmptyIconsCount(count: number) {
    this.emptyconsElements.should('have.length', count);
    return this;
  }

  hasHalfFilledIconsCount(count: number) {
    this.halfFilledIconsElements.should('have.length', count);
    return this;
  }

  hasAriaLabel(ariaLabel: string) {
    this.container.should('have.attr', 'aria-label', ariaLabel);
    return this;
  }

  get iconElements() {
    return this.container.find('svg');
  }

  get filledIconsElements() {
    return this.findTestElement('star-filled');
  }

  get emptyconsElements() {
    return this.findTestElement('star');
  }

  get halfFilledIconsElements() {
    return this.findTestElement('star-half');
  }
}
