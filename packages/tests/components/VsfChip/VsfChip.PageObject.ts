import { BasePage } from '../../utils/BasePage';

export default class VsfChipObject extends BasePage {
  isDisabled() {
    this.input.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.input.should('not.be.disabled');
    return this;
  }

  isSelected() {
    this.input.check({ force: true });
    return this;
  }

  isValueSet(value: string) {
    this.input.should('have.attr', 'value').and('contain', value);
    return this;
  }

  isNotVisible() {
    this.input.should('not.be.visible');
    return this;
  }

  get input() {
    return this.container.prev();
  }
}
