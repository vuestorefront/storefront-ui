import { BasePage } from '../../utils/BasePage';

const mouseOptions = { eventConstructor: 'MouseEvent', force: true } as const;

export default class SfScrollablePageObject extends BasePage {
  // listeners are attached after mount; the next button turns enabled once the first scroll state is computed
  isReady() {
    this.container.parent().find('button[aria-label="Next"]').should('not.be.disabled');
    return this;
  }

  dragVertically(fromY: number, toY: number) {
    this.container
      .trigger('mousedown', 50, fromY, mouseOptions)
      .trigger('mousemove', 50, toY, mouseOptions)
      .trigger('mouseup', 50, toY, mouseOptions);
    return this;
  }

  hasScrollTopGreaterThan(value: number) {
    this.container.should(($container) => {
      expect($container[0].scrollTop).to.be.greaterThan(value);
    });
    return this;
  }

  hasScrollLeft(value: number) {
    this.container.should(($container) => {
      expect($container[0].scrollLeft).to.equal(value);
    });
    return this;
  }
}
