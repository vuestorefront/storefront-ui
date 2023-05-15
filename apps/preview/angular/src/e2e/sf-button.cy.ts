import { SfButtonComponent } from '@storefront-ui/angular';

it('should render button and exist', () => {
  cy.mount('<div sf-button></div>', { imports: [SfButtonComponent] });
  cy.get('[data-testid="button"]').should('exist');
});

it('should render content when pass to child', () => {
  const content = 'Hello';
  cy.mount(`<div sf-button>${content}</div>`, { imports: [SfButtonComponent] });
  cy.get('[data-testid="button"]').should('contain.text', content);
});
