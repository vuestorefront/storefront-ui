import { BasePage } from '../../utils/BasePage';

export default class SfDrawerBaseObject extends BasePage {
  isOpened() {
    this.container.should('exist');
    return this;
  }

  isClosed() {
    this.container.should('not.exist');
    return this;
  }

  pressEsc() {
    this.container.then((el) => el[0].focus());
    this.container.trigger('keydown', { key: 'Escape' });
    return this;
  }
}
