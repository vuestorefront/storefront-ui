import { BasePage } from '../../utils/BasePage';

export default class SfListItemObject extends BasePage {
  hasTag(tagName: string) {
    this.container.then((el) => {
      expect(el[0].tagName).to.equal(tagName);
    });
    return this;
  }

  hasContent(content: string) {
    this.container.contains(content);
    return this;
  }

  hasPrefix() {
    this.container.children().first().should('have.class', 'text-neutral-500');
    return this;
  }

  hasSuffix() {
    this.container.children().last().should('have.class', 'text-neutral-500');
    return this;
  }

  isDisabled() {
    this.container.should('have.class', 'cursor-not-allowed pointer-events-none text-disabled-900');
    return this;
  }
}
