describe('Component documentation page', () => {
  context('Vue framework', () => {
    beforeEach(() => {
      cy.visit('/vue/components/button');
    });

    it('loads the Button component docs page', () => {
      cy.get('h1').should('contain.text', 'Button');
    });

    it('renders a preview showcase with an iframe', () => {
      cy.get('iframe.generate').first().should('be.visible');
    });

    it('points the iframe to the Vue examples server', () => {
      cy.get('iframe.generate')
        .first()
        .should('have.attr', 'src')
        .and('match', /Button/i);
    });

    it('has Preview and Code tabs', () => {
      cy.contains('button', 'Preview').should('be.visible');
      cy.contains('button', 'Code').should('be.visible');
    });

    it('shows source code when Code tab is clicked', () => {
      cy.contains('button', 'Code').first().click();
      cy.get('pre').should('be.visible');
    });
  });

  context('React framework', () => {
    beforeEach(() => {
      cy.visit('/react/components/button');
    });

    it('loads the Button component docs page for React', () => {
      cy.get('h1').should('contain.text', 'Button');
    });

    it('renders a preview showcase with an iframe pointing to React examples', () => {
      cy.get('iframe.generate')
        .first()
        .should('be.visible')
        .and('have.attr', 'src')
        .and('match', /Button/i);
    });
  });
});
