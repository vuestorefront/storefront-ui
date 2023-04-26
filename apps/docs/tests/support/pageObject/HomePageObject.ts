export class HomePageObject {
  get installForVueButton() {
    return cy.contains('Install for Vue');
  }
  get installForReactButton() {
    return cy.contains('Install for React');
  }
}
