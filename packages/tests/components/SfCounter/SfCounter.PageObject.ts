import { BasePage } from '../../utils/BasePage';

export default class SfCounterBaseObject extends BasePage<HTMLDivElement> {
  isPill() {
    this.container.should('have.class', 'ring-inset');
    return this;
  }

  hasValue(value: string) {
    this.container.contains(value);
    return this;
  }
}
