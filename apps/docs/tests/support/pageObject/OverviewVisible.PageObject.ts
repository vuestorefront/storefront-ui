export class OverviewVisibleObject {
  overviewVueComponents() {
    return cy.fixture<Record<string, string>[]>('overviewcomponents.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/vue${element.url}"]`).first().should('be.visible');
      });
    });
  }

  overviewVueBlocks() {
    return cy.fixture<Record<string, string>[]>('overviewblocks.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/vue${element.url}"]`).last().should('be.visible');
      });
    });
  }

  overviewReactComponents() {
    return cy.fixture<Record<string, string>[]>('overviewcomponents.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/react${element.url}"]`).first().should('be.visible');
      });
    });
  }

  overviewReactBlocks() {
    return cy.fixture<Record<string, string>[]>('overviewblocks.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/react${element.url}"]`).last().should('be.visible');
      });
    });
  }
}
