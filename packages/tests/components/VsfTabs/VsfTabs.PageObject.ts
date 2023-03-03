import { VsfButtonSize } from '@storefront-ui/vue/components/VsfButton/types';
import { BasePage } from '../../utils/BasePage';

export default class VsfTabsBaseObject extends BasePage {
  hasSizeClass(size: VsfButtonSize) {
    this.buttonElements.should('have.class', `vsf-button--${size}`);
    return this;
  }

  isTabDisabled(index: number) {
    this.buttonElements.eq(index).should('be.disabled');
    return this;
  }

  isCounterVisible() {
    this.counterElement.should('be.visible');
    return this;
  }

  get buttonElements() {
    return this.findTestElement('tabs-item');
  }

  get counterElement() {
    return this.findTestElement('counter');
  }
}
