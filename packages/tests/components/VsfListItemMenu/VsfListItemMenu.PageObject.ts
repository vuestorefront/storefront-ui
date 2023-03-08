import { BasePage } from '../../utils/BasePage';

export default class VsfListItemMenuObject extends BasePage {
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
    this.container.children().first().should('have.class', 'flex-grow-0 text-neutral-500 mr-2.5');
    return this;
  }

  hasSuffix() {
    this.container.children().last().should('have.class', 'flex-grow-0 text-neutral-500');
    return this;
  }

  isDisabled() {
    this.container.should('have.class', 'opacity-40 bg-white cursor-not-allowed pointer-events-none');
    return this;
  }
}
