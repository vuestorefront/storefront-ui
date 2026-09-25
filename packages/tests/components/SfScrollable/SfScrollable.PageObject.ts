import { BasePage } from '../../utils/BasePage';

const mouseOptions = { eventConstructor: 'MouseEvent', force: true } as const;

export default class SfScrollablePageObject extends BasePage {
  // listeners are attached after mount; the next button turns enabled once the first scroll state is computed
  isReady() {
    this.container.parent().find('button[aria-label="Next"]').should('not.be.disabled');
    return this;
  }

  dragHorizontally(fromX: number, toX: number) {
    this.container
      .trigger('mousedown', fromX, 50, mouseOptions)
      .trigger('mousemove', toX, 50, mouseOptions)
      .trigger('mouseup', toX, 50, mouseOptions);
    return this;
  }

  pressWithoutMoving(x: number) {
    this.container.trigger('mousedown', x, 50, mouseOptions).trigger('mouseup', x, 50, mouseOptions);
    return this;
  }

  hasScrollLeftGreaterThan(value: number) {
    this.container.should(($container) => {
      expect($container[0].scrollLeft).to.be.greaterThan(value);
    });
    return this;
  }

  saveScrollLeft(alias: string) {
    this.container.then(($container) => cy.wrap($container[0].scrollLeft).as(alias));
    return this;
  }

  hasScrollLeftEqualTo(alias: string) {
    cy.get<number>(`@${alias}`).then((scrollLeft) => {
      this.container.should(($container) => {
        expect($container[0].scrollLeft).to.equal(scrollLeft);
      });
    });
    return this;
  }
}
