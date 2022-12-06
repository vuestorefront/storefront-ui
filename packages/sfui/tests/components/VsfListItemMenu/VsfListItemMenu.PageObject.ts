import { BasePage } from '../../utils/BasePage';

export default class VsfListItemMenuObject extends BasePage {

  hasTag(tagName: string) {
    this.container.then(el => {
      expect(el[0].tagName).to.equal(tagName)
    });
    return this;
  }

  isDisabled(){
    this.container.should('be.disabled');
    return this;
  }

  isNotDisabled(){
    this.container.should('not.be.disabled');
    return this;
  }

  get container() {
    return this.findTestElement('list-item-menu');
  }
}
