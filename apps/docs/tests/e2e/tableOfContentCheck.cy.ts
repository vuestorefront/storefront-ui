import { TableContent } from '../support/pageObject/TableOfContent.PageObject';

const tableContent = () => new TableContent();

describe('Table of content ', () => {
  it('Button vue full table of content ', () => {
    cy.visit('/vue/components/button.html');
    tableContent().buttonTablesForVue();
  });
  it('Button react full table of content', () => {
    cy.visit('/react/components/button.html');
    tableContent().buttonTablesForReact();
  });
  it('Vue base components generic table of content', () => {
    cy.visit('vue/getting-started.html');
    tableContent().genericTablesForVue();
  });

  it('React base components generic table of content', () => {
    cy.visit('react/getting-started.html');
    tableContent().genericTablesForReact();
  });

  // some examples will not work until there is fix that all components have a11y notes and then need to update components list section
});
