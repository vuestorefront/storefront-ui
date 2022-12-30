import { BasePage } from '../../utils/BasePage';

export default class VsfRatingButtonBaseObject extends BasePage {
  hasIcons(ariaLabel:string, item: number) {
    this.iconElements.eq(item).should('have.attr', 'aria-label', ariaLabel)
    return this;
  }
  
  hasMaxItems(max: number) {
    this.itemElements.eq(max)
    return this;
  }

  isDisabled(){
    this.container.should('be.disabled');
    return this;
  }

  isNotDisabled(){
    this.container.should('not.be.disabled');
    return this;
  }

  hasFilledIcons(value: number) {
    this.filledIconsElements.should('have.length', value);
    return this;
  }

  hasLegendName(name: string) {
    this.legendElement.contains(name);
    return this;
  }

  hasAriaLabel(ariaLabel: string) {
    this.inputElements.should('have.attr', 'aria-label', ariaLabel);
    return this;
  }

  itemClick(elementClicked: number) {
    this.container.find(`[id="rating-${elementClicked}"]`).click()
    return this;
  }

  get iconElements() {
    return this.container.find('svg');
  }

  get itemElements() {
    return this.container.find('[data-testid^="rating-button-item-"]');
  }

  get filledIconsElements() {
    return this.container.find('[data-testid^="rating-button-icon-filled-"]');
  }

  get legendElement() {
    return this.findTestElement('rating-button-legend');
  }

  get inputElements() {
    return this.container.find('[data-testid^="rating-button-item-input-"]');
  }
}
