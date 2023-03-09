import { BasePage } from '../../utils/BasePage';

export default class VsfChipThumbnailBaseObject extends BasePage {
  hasBackgroundColor(color: string) {
    this.container.should('have.css', 'background-color', color);
    return this;
  }
  hasBackgroundImage(image: string) {
    this.container.should('have.css', 'background-image', image);
    return this;
  }
}
