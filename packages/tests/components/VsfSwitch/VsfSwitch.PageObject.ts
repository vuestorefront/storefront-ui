import { BasePage } from '../../utils/BasePage';

export default class VsfSwitchObject extends BasePage {
  isChecked() {
    this.container.check();
    return this;
  }
}
