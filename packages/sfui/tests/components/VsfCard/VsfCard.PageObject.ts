import { BasePage } from '../../utils/BasePage';

export default class VsfProductCardBaseObject extends BasePage {

  hasImage(imageSrc: string) {
    this.imageElement.should('have.attr', 'src', imageSrc);
    return this;
  }

  doesNotHaveImage() {
    this.imageElement.should('not.exist');
    return this;
  }

  hasTitle(title: string) {
    this.titleElement.contains(title);
    return this;
  }

  doesNotHaveTitle() {
    this.titleElement.should('not.exist');
    return this;
  }

  hasDescription(description: string) {
    this.descriptionElement.contains(description);
    return this;
  }

  hasProperSize(size: string) {
    this.container.invoke('css', 'width').should('be.eq', size);
    return this;
  }

  isHorizontal(size: string) {    
    this.container.invoke('css', 'width').should('be.eq', size);
    return this;
  }

  get buttonElement() {
    return this.findTestElement('card-button');
  }

  get imageElement() {
    return this.findTestElement('card-image');
  }

  get titleElement() {
    return this.findTestElement('card-title');
  }

  get descriptionElement() {
    return this.findTestElement('card-description');
  }
}
