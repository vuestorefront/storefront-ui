import { BasePage } from '../../utils/BasePage';

export default class VsfCounterBaseObject extends BasePage<HTMLDivElement> {
  isPill() {
    this.container.should('have.class', 'vsf-counter--pill');
    return this;
  }

  hasValue(value: string) {
    this.container.contains(value);
    return this;
  }
}
