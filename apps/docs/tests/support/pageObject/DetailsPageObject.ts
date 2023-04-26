export class DetailsPageObject {
  get frameworkName() {
    return cy.get('main').find('div[class="mb-8"]').first().find('span').first();
  }
  header(name: string) {
    return cy.get(`h1[id="${name}"]`);
  }

  title(framework: string) {
    return cy.get(`h2[id="${framework}"]`);
  }
}
