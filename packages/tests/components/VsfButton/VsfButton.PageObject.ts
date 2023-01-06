import { BasePage } from '../../utils/BasePage';

export default class VsfButtonBaseObject extends BasePage {
  hasHref(link: string) {
    this.container.should('have.attr', 'href', link);
    return this;
  }

  doesNotHaveHref() {
    this.container.should('not.have.attr', 'href');
    return this;
  }

  hasTypeOnButton(type: string) {
    this.container.should('have.attr', 'type', type);
    return this;
  }

  isDisabled() {
    this.container.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.container.should('not.be.disabled');
    return this;
  }
}
