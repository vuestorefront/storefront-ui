import { BasePage } from '../../utils/BasePage';

export default class SfRatingButtonBaseObject extends BasePage {
  hasValue(value: number) {
    this.container.find('input:checked').should('have.attr', 'value', value);
    return this;
  }

  hasAriaLabel(ariaLabel: string) {
    this.container.should('have.attr', 'aria-label', ariaLabel);
    return this;
  }

  allInputsHaveName(name: string, max: number) {
    this.inputs.should(($inputs) => {
      expect($inputs, `${max} inputs`).to.have.length(max);
      Array.from({ length: max }, (_, index) => index).forEach((index) => {
        expect($inputs.eq(index), `${index} input`).to.have.attr('name', name);
      });
    });
    return this;
  }

  hasLabels(getLabelText: (value: number) => string, max: number) {
    this.labels.should(($labels) => {
      expect($labels, `${max} labels`).to.have.length(max);
      Array.from({ length: max }, (_, index) => index + 1).forEach((value, index) => {
        expect($labels.eq(index), `${index} input`).to.contain(getLabelText(value));
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
    return this.getTestElement('ratingbutton-icon-filled');
  }

  get iconEmpty() {
    return this.getTestElement('ratingbutton-icon-empty');
  }
}
