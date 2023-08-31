export class ChangeFrameworkObject {
  get frameworkDropdown() {
    return cy.get('.content-menu > .relative');
  }

  clickFrameworkDropdown() {
    this.frameworkDropdown.click();
    return this;
  }
}
