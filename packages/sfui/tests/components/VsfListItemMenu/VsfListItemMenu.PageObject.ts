import { BasePage } from '../../utils/BasePage';

export default class VsfListItemMenuObject extends BasePage {

  hasTag(tagName: string) {
    this.container.then(el => {
      expect(el[0].tagName).to.equal(tagName)
    });
    return this;
  }

  hasLabel(label: string) {
    this.labelElement.contains(label);
    return this;
  }

  hasCounter(val: string) {
    this.counterElement.contains(val);
    return this;
  }

  hasSecondaryText(secondaryText: string) {
    this.secondaryElement.contains(secondaryText);
    return this;
  }

  isDisabled(){
    this.container.should('be.disabled');
    return this;
  }

  isSelected(){
    this.container.should('have.class', 'vsf-list-item-menu--selected')
  }

  get labelElement() {
    return this.findTestElement('list-item-menu-label');
  }
  get counterElement() {
    return this.findTestElement('list-item-menu-counter');
  }
  get secondaryElement() {
    return this.findTestElement('list-item-menu-secondary-text');
  }
}
