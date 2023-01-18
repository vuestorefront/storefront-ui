import { BasePage } from '../../utils/BasePage';
import { VsfButtonSize } from '../../../sfui/frameworks/vue/components/VsfButton/types';

export default class VsfTabsBaseObject extends BasePage {
  hasSizeClass(size: VsfButtonSize) {
    this.buttonElements.should('have.class', `vsf-button--${size}`);
    return this;
  }

  isTabDisabled(index: number) {
    this.buttonElements.eq(index).should('be.disabled');
    return this;
  }

  get buttonElements() {
    return this.findTestElement('tabs-item');
  }
}
