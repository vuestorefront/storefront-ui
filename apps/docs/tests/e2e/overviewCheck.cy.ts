import { OverviewVisibleObject } from '../support/pageObject/OverviewVisible.PageObject';

const overviewVisible = () => new OverviewVisibleObject();

describe('Blocks and Components overview check', () => {
  it('Vue', () => {
    cy.visit('/#vue');
    cy.contains('Install for Vue').should('be.visible');
    cy.get('#base-components').should('contain.text', 'Base Components ');
    overviewVisible().overviewVueComponents();
    cy.visit('/vue/blocks.html');
    overviewVisible().overviewVueBlocks();
  });
  it('React', () => {
    cy.visit('/#react');
    cy.contains('Install for React').should('be.visible');
    cy.get('#base-components-2').should('contain.text', 'Base Components ');
    overviewVisible().overviewReactComponents();
    cy.visit('/react/blocks.html');
    overviewVisible().overviewReactBlocks();
  });
});
