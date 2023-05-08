export class DetailsPageObject {
  isFramework(framework: string) {
    this.frameworkName.should('contain.text', framework);
    return this;
  }

  hasHeaderText(element: string, text: string) {
    cy.get(`h1[id="${element}"]`).should('contain.text', text);
    return this;
  }

  hasTitle(element: string, text: string) {
    cy.get(`h2[id="${element}"]`).should('contain.text', text);
    return this;
  }

  hasFrameworkName(name: string) {
    this.frameworkName.should('contain.text', name);
    return this;
  }

  get frameworkName() {
    return cy.get('main').find('div[class="mb-8"]').first().find('span').first();
  }
}
