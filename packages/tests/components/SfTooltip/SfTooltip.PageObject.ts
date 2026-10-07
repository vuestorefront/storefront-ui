import { BasePage } from '../../utils/BasePage';

export default class SfTooltipObject extends BasePage {
  hasTooltipId(id: string) {
    this.tooltip.should('have.attr', 'id', id);
    return this;
  }

  isTooltipHidden() {
    this.tooltip.should('not.exist');
    return this;
  }

  isTooltipVisible() {
    this.tooltip.should('exist');
    this.tooltip.should('be.visible');
    return this;
  }

  isTooltipBelowTrigger() {
    this.container.then(($trigger) => {
      this.tooltip.should(($tooltip) => {
        expect($tooltip[0].getBoundingClientRect().top).to.be.greaterThan($trigger[0].getBoundingClientRect().top);
      });
    });
    return this;
  }

  hasArrowOnTopEdge() {
    this.tooltip.should(($tooltip) => {
      const arrow = $tooltip.find('span')[0];
      expect(arrow, 'arrow').to.exist;
      const tooltipRect = $tooltip[0].getBoundingClientRect();
      const arrowRect = arrow.getBoundingClientRect();
      expect(arrowRect.top, 'arrow top').to.be.lessThan(tooltipRect.top);
      expect(arrowRect.bottom, 'arrow bottom').to.be.lessThan(tooltipRect.bottom);
    });
    return this;
  }

  get tooltip() {
    return this.container.get('[role="tooltip"]');
  }
}
