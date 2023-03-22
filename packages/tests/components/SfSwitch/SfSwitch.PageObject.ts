import { BasePage } from '../../utils/BasePage';

export default class SfSwitchObject extends BasePage {
  isChecked() {
    this.container.check();
    return this;
  }
}
