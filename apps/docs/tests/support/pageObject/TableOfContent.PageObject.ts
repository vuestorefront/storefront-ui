export class TableContent {
  buttonTablesForVue() {
    return cy.fixture<Record<string, string>[]>('buttonTablesOfContent.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="${element.url}"]`).first().click();
        cy.url().should('contain', `${element.url}`);
      });
    });
  }

  buttonTablesForReact() {
    return cy.fixture<Record<string, string>[]>('buttonTablesOfContent.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="${element.url}"]`).first().click();
        cy.url().should('contain', `${element.url}`);
      });
    });
  }

   genericTablesForVue() {
    return cy.fixture<Record<string, string>[]>('genericTablesOfContent.json').then((elements) => {
        elements.forEach((element) => {
          cy.get(`a[href="/v2/vue${element.url}"]`).first().click();
          cy.get(`a[href="${element.table1}"]`).first().click();
          cy.url().should('contain', `${element.table1}`);
          cy.get(`a[href="${element.table2}"]`).first().click();
          cy.url().should('contain', `${element.table2}`);
          cy.get(`a[href="${element.table3}"]`).first().click();
          cy.url().should('contain', `${element.table3}`);
        });
      });
  }

  genericTablesForReact() {
    return cy.fixture<Record<string, string>[]>('genericTablesOfContent.json').then((elements) => {
        elements.forEach((element) => {
          cy.get(`a[href="/v2/react${element.url}"]`).first().click();
          cy.get(`a[href="${element.table1}"]`).first().click();
          cy.url().should('contain', `${element.table1}`);
          cy.get(`a[href="${element.table2}"]`).first().click();
          cy.url().should('contain', `${element.table2}`);
          cy.get(`a[href="${element.table3}"]`).first().click();
          cy.url().should('contain', `${element.table3}`);
        });
      });
  }
}
