export class HomePageObject {
  clickInstallForVue() {
    this.installForVueButton.click();
    return this;
  }

  clickInstallForReact() {
    this.installForReactButton.click();
    return this;
  }

  get installForVueButton() {
    return cy.contains('Install for Vue');
  }

  get installForReactButton() {
    return cy.contains('Install for React');
  }
}
