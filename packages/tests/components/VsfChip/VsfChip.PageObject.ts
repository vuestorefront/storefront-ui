import { BasePage } from '../../utils/BasePage';
import { VsfChipSize } from '../../../sfui/frameworks/vue/components/VsfChip/types';

export default class VsfChipObject extends BasePage {
  hasSizeClass(size: VsfChipSize) {
    this.container.should('have.class', `vsf-chip--size-${size}`);
    return this;
  }

  isDisabled() {
    this.inputElement.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.inputElement.should('not.be.disabled');
    return this;
  }

  hasLabel(label: string) {
    this.container.contains(label);
    return this;
  }

  isSelected() {
    this.inputElement.should('not.be.visible').check({ force: true }).should('be.checked');
    return this;
  }

  isValueSet(value: string) {
    this.inputElement.should('have.attr', 'value').and('contain', value);
    return this;
  }

  isNotVisible() {
    this.container.should('not.be.visible');
    return this;
  }

  get inputElement() {
    return this.findTestElement('chip-input');
  }
}
