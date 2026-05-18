describe('Framework selector', () => {
  beforeEach(() => {
    cy.visit('/vue/components/button');
  });

  it('shows the currently active framework in the dropdown trigger', () => {
    // The trigger button inside the sidebar shows the selected framework name
    cy.get('button.capitalize').first().should('contain.text', 'vue');
  });

  it('opens the framework dropdown when the trigger is clicked', () => {
    cy.get('button.capitalize').first().click();
    cy.contains('li', 'react').should('be.visible');
    cy.contains('li', 'vue').should('be.visible');
  });

  it('switches from Vue to React and updates the URL', () => {
    // Open the framework dropdown
    cy.get('button.capitalize').first().click();
    // Select React
    cy.contains('li', 'react').find('button, a').click();
    // URL should update to react
    cy.url().should('include', '/react/components/button');
  });

  it('shows React as selected after switching', () => {
    cy.get('button.capitalize').first().click();
    cy.contains('li', 'react').find('button, a').click();
    // After switching, the trigger should show React
    cy.get('button.capitalize').first().should('contain.text', 'react');
  });

  it('switches from React back to Vue and updates the URL', () => {
    cy.visit('/react/components/button');
    cy.get('button.capitalize').first().click();
    cy.contains('li', 'vue').find('button, a').click();
    cy.url().should('include', '/vue/components/button');
  });

  it('has a link to Qwik that opens externally', () => {
    cy.get('button.capitalize').first().click();
    cy.contains('li', 'qwik').find('a').should('have.attr', 'target', '_blank');
  });
});
