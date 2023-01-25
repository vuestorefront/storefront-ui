import { BasePage } from '../../utils/BasePage';

export default class VsfDropdownMenuBaseObject extends BasePage {
  hasListItemMenu() {
    this.listItemMenuElement.should('exist');
    return this;
  }

  hasLoader() {
    this.loaderElement.should('exist');
    return this;
  }

  get listItemMenuElement() {
    return this.findTestElement('list-item-menu');
  }

  get loaderElement() {
    return this.findTestElement('loader-circular');
  }
}
