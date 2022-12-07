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

  hasBadge(badgeText: string) {
    this.badgeElement.contains(badgeText);
    return this;
  }

  doesNotHaveBadge() {
    this.badgeElement.should('not.exist');
    return this;
  }

  hasInCart(inCart: string) {
    this.inCartElement.contains(inCart);
    return this;
  }

  doesNotHaveInCart() {
    this.inCartElement.should('not.exist');
    return this;
  }

  hasPrice(price: string) {
    this.priceElement.contains(price);
    return this;
  }

  hasOldPrice(oldPrice: string) {
    this.oldPriceElement.contains(oldPrice);
    return this;
  }

  hasMaxRatingValue(maxRatingValue: number) {
    this.ratingElement.find('svg').should('have.length', maxRatingValue);
    return this;
  }

  hasRatingValue(ratingValue: number) {
    this.ratingElement.find('.vsf-rating__star-filled').should('have.length', ratingValue);
    return this;
  }

  hasReviewsAmount(reviewsAmount: number) {
    this.reviewsElement.contains(reviewsAmount);
    return this;
  }

  hasProperSize(size: string) {
    this.container.invoke('css', 'width').should('be.eq', size);
    return this;
  }

  hasOutOfStock() {
    this.inCartElement.contains('Out of stock');
    return this;
  }

  hasSeeSimilarButton(similarLabel: string) {
    this.seeSimilarButtonElement.contains(similarLabel);
    return this;
  }

  isHorizontal(size: string) {    
    this.container.invoke('css', 'width').should('be.eq', size);
    return this;
  }

  addToCartClick() {
    this.addToCartElement.click();    
    return this;
  }

  addToWishlistClick() {
    this.wishlistButtonElement.click();
    return this;
  }

  seeSimilarClick() {
    this.seeSimilarButtonElement.click();
    return this;
  }

  seeReviewsClick() {
    this.reviewsElement.click();
    return this;
  }

  get imageElement() {
    return this.findTestElement('product-card-image');
  }

  get titleElement() {
    return this.findTestElement('product-card-title');
  }

  get descriptionElement() {
    return this.findTestElement('product-card-description');
  }

  get badgeElement() {
    return this.findTestElement('product-card-badge');
  }

  get inCartElement() {
    return this.findTestElement('product-card-in-cart');
  }

  get priceElement() {
    return this.findTestElement('product-card-price');
  }

  get oldPriceElement() {
    return this.findTestElement('product-card-old-price');
  }

  get ratingElement() {
    return this.findTestElement('product-card-rating');
  }

  get reviewsElement() {
    return this.findTestElement('product-card-reviews');
  }

  get addToCartElement() {
    return this.findTestElement('product-card-add-to-cart');
  }

  get wishlistButtonElement() {
    return this.findTestElement('product-card-add-to-wishlist');
  }

  get seeSimilarButtonElement() {
    return this.findTestElement('product-card-see-similar');
  }
}
