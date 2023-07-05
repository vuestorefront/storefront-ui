import { BasePage } from '../../utils/BasePage';

export default class SfTextareaBaseObject extends BasePage {
  isDisabled() {
    this.container.should('be.disabled');
    return this;
  }

  isNotDisabled() {
    this.container.should('not.be.disabled');
    return this;
  }

  hasReadonly() {
    this.container.should('have.attr', 'readonly');
    return this;
  }

  hasPlaceholder() {
    this.container.should('have.attr', 'placeholder');
    return this;
  }

  hasValue(value: string) {
    this.container.should('have.value', value);
    return this;
  }
}
