export class CodePreviewCheckObject {
  
 
  vueComponentsSourceCheck(){
    return cy.fixture<Record<string, string>[]>('overviewcomponents.json').then((elements) => {
      elements.forEach((element) => {
        cy.visit(`/vue${element.url}`);
        cy.get('button').contains(`Source`).click();
        cy.get('code').contains('import');
      });
    });
  }

  vueBlocksAndComponentsCodeCheck(){
    return cy.fixture<Record<string, string>[]>('blocksAndComponents.json').then((elements) => {
      elements.forEach((element) => {
        cy.visit(`/vue${element.url}`);
        cy.get('button').contains('Code').first().click();
        cy.get('pre.language-vue').first().contains('template');
      });
    });
  }

  reactComponentsSourceCheck(){
    return cy.fixture<Record<string, string>[]>('overviewcomponents.json').then((elements) => {
      elements.forEach((element) => {
        cy.visit(`/react${element.url}`);
        cy.get('button').contains(`Source`).click();
        cy.get('code').contains('import');
      });
    });
  }

  reactComponentsCodeCheck(){
    return  cy.fixture<Record<string, string>[]>('baseComponents.json').then((elements) => {
      elements.forEach((element) => {
        cy.visit(`/react${element.url}`);
        cy.get('button').contains('Code').first().click();
        cy.get('pre.language-tsx').first().contains('import');
      });
    });
  }

  reactBlocksCodeCheck(){
    return cy.fixture<Record<string, string>[]>('overviewblocks.json').then((elements) => {
      elements.forEach((element) => {
        cy.visit(`/react${element.url}`);
        cy.get('button').contains('Code').first().click();
        cy.get('pre.language-tsx').first().contains('export');
      });
    });
  }
}
