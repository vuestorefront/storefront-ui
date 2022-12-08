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

  hasDescription(description: string) {
    this.descriptionElement.contains(description);
    return this;
  }

  hasTag(tagName: string) {
    this.buttonElement.then(el => {
      expect(el[0].tagName).to.equal(tagName)
    });
    return this;
  }

  isRounded() {
    this.container.should('have.class', 'vsf-card--rounded');
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
