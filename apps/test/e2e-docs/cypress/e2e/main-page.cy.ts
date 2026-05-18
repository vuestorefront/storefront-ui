describe('Documentation main page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads and displays the page title', () => {
    cy.get('h1').should('contain.text', 'Storefront UI');
  });

  it('has links to get started for Vue and React', () => {
    cy.contains('a', 'Vue').should('be.visible');
    cy.contains('a', 'React').should('be.visible');
  });

  it('has a sidebar with navigation', () => {
    cy.get('aside, nav').should('exist');
  });

  it('has a working link to the Vue getting started page', () => {
    cy.contains('a', /install for vue/i).click();
    cy.url().should('include', 'getting-started');
    cy.url().should('include', 'vue');
  });
});
