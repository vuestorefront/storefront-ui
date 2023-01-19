import { BasePage } from '../../utils/BasePage';

export default class VsfHeroBaseObject extends BasePage {
  hasBgImg(src: string) {
    this.container.should('have.css', 'background-image').and('include', src);
    return this;
  }

  notHaveBgImg(src: string) {
    this.container.should('have.css', 'background-image').and('not.include', src);
    return this;
  }
}
