import { BasePage } from '../../utils/BasePage';

export default class VsfProgressLinearBaseObject extends BasePage {

  hasValue(label: number) {
    this.container.contains(label);
    return this;
  }

  doesNotHaveValue() {
    this.valueElement.should('not.exist')
    return this;
  }

  get valueElement() {
    return this.findTestElement('progress-value');
  }
}
