import { BasePage } from '../../utils/BasePage';
import { isReact } from '../../utils/utils';

export default class VsfDropdownInternalBaseObject extends BasePage {
  clickTrigger() {
    this.triggerElement.click();
    return this;
  }

  hoverTriggerElement() {
    // https://github.com/cypress-io/cypress/issues/3644
    this.triggerElement.trigger(isReact ? 'mouseover' : 'mouseenter');
    return this;
  }

  hoverOutTriggerElement() {
    // https://github.com/cypress-io/cypress/issues/3644
    this.triggerElement.trigger(isReact ? 'mouseout' : 'mouseleave');
    return this;
  }

  dropdownIsOpen() {
    this.dropdownElement.should('exist');
    return this;
  }

  dropdownIsClose() {
    this.dropdownElement.should('not.exist');
    return this;
  }

  get triggerElement() {
    return this.findTestElement('dropdown-trigger');
  }

  get dropdownElement() {
    return this.getTestElement('dropdown-dropdown');
  }
}
