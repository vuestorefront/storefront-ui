import { BasePage } from '../../utils/BasePage';

export default class VsfBadgeBaseObject extends BasePage<HTMLDivElement> {
  isBordered() {
    this.container.should('have.class', 'vsf-badge--bordered');
    return this;
  }

  isDot() {
    this.container.should('have.class', 'vsf-badge--dot');
    return this;
  }

  isInvisible() {
    this.badgeWrapperElement.should('not.exist');
    return this;
  }
  hasValue(value: string) {
    this.container.contains(value);
    return this;
  }

  get badgeWrapperElement() {
    return this.findTestElement('badge-wrapper');
  }
}
