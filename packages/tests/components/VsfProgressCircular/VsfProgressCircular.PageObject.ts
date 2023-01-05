import { BasePage } from '../../utils/BasePage';

export default class VsfProgressCircularBaseObject extends BasePage {

  hasValue(label: number) {
    this.container.contains(label);
    return this;
  }

  doesNotHaveValue() {
    this.valueElement.should('be.empty');
    return this;
  }

  get valueElement() {
    return this.findTestElement('progress-value');
  }
}
