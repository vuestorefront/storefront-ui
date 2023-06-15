import { BasePage } from '../../utils/BasePage';

export default class SfRatingButtonBaseObject extends BasePage {
  hasValue(value: number) {
    this.container.find('input:checked').should('have.attr', 'value', value);
    return this;
  }

  hasLabel(label: string) {
    cy.get('legend').contains(label);
    return this;
  }

  allInputsHaveAttr({
    max,
    attr,
    expectedValue,
  }: {
    max: number;
    attr: string;
    expectedValue: string | ((value: number) => string);
  }) {
    this.inputs.should(($inputs) => {
      expect($inputs, `${max} inputs`).to.have.length(max);
      Array.from({ length: max }, (_, index) => index + 1).forEach((value, index) => {
        expect($inputs.eq(index), `${index} input`).to.have.attr(
          attr,
          typeof expectedValue === 'function' ? expectedValue(value) : expectedValue,
        );
      });
    });
    return this;
  }

  hasIconsByValue(value: number, max: number) {
    this.iconFilled.should('have.length', value);
    this.iconEmpty.should('have.length', max - value);
    return this;
  }

  clickFilledIcon(index = 0) {
    this.iconFilled.eq(index).click();
    return this;
  }

  clickEmptyIcon(index = 0) {
    this.iconEmpty.eq(index).click();
    return this;
  }

  get inputs() {
    return this.container.find('input');
  }

  get labels() {
    return this.container.find('label');
  }

  get iconFilled() {
    return this.getTestElement('star-filled');
  }

  get iconEmpty() {
    return this.getTestElement('star');
  }
}
