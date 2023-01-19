import { BasePage } from '../../utils/BasePage';

export default class VsfPaginationBaseObject extends BasePage {
  previousClick() {
    this.pagePreviousButton.click();
    return this;
  }

  nextClick() {
    this.pageNextButton.click();
    return this;
  }

  previousLabelExist() {
    this.pagePreviousLabel.should('exist');
    return this;
  }

  previousLabelNotExist() {
    this.pagePreviousLabel.should('not.exist');
    return this;
  }

  nextLabelExist() {
    this.pageNextLabel.should('exist');
    return this;
  }

  nextLabelNotExist() {
    this.pageNextLabel.should('not.exist');
    return this;
  }

  lastClick() {
    this.pageLastButton.click();
    return this;
  }

  leftEllipsisNotExist() {
    this.leftEllipsis.should('not.exist');
    return this;
  }

  rightEllipsisNotExist() {
    this.rightEllipsis.should('not.exist');
    return this;
  }

  leftEllipsisExists() {
    this.leftEllipsis.should('exist');
    return this;
  }

  rightEllipsisExists() {
    this.rightEllipsis.should('exist');
    return this;
  }

  lastButtonContains(totalItems, itemsPerPage) {
    this.pageLastButton.contains(totalItems / itemsPerPage);
    return this;
  }

  pageElementsLength(maxVisiblePages) {
    this.pageElements.should('have.length', maxVisiblePages);
    return this;
  }

  get pageElements() {
    return this.container.find('[data-testid^="pagination-button-visible-"]');
  }

  get pagePreviousButton() {
    return this.findTestElement('pagination-button-prev');
  }

  get pageNextButton() {
    return this.findTestElement('pagination-button-next');
  }

  get pagePreviousLabel() {
    return this.findTestElement('pagination-label-prev');
  }
  get pageNextLabel() {
    return this.findTestElement('pagination-label-next');
  }

  get pageLastButton() {
    return this.findTestElement('pagination-button-last');
  }

  get leftEllipsis() {
    return this.findTestElement('pagination-button-ellipsis-left');
  }

  get rightEllipsis() {
    return this.findTestElement('pagination-button-ellipsis-right');
  }
}
