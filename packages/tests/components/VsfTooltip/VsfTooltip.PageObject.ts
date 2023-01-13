import { BasePage } from '../../utils/BasePage';

export default class VsfTooltipBaseObject extends BasePage {
  hasPointer() {
    this.tooltipLabel.should('not.have.class', 'vsf-tooltip__label--without-pointer');
    return this;
  }

  doesNotHavePointer() {
    this.tooltipLabel.should('have.class', 'vsf-tooltip__label--without-pointer');
    return this;
  }

  hasLabel(label) {
    this.tooltipLabel.contains(label);
    return this;
  }

  get tooltipLabel() {
    return this.getTestElement('tooltip-label');
  }
}
