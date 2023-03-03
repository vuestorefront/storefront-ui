import { BasePage } from '../../utils/BasePage';

export default class VsfLinkBaseObject extends BasePage {
  hasHref(value: string) {
    this.container.should('have.attr', 'href', value);
    return this;
  }

  hasClass(className: string) {
    this.container.should('have.class', className);
    return this;
  }
}
