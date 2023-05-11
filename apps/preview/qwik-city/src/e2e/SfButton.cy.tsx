import { SfButton } from '@storefront-ui/qwik';

it('should contain text', () => {
  const content = 'Hello';
  cy.mount(<SfButton type="button" size="sm">{content}</SfButton>);
  cy.get('[data-testid="button"]').should('contain.text', content);
});

it('should not contain text', () => {
  const content = 'Hello';
  cy.mount(<SfButton type="button" size="sm">foo bar</SfButton>);
  cy.get('[data-testid="button"]').should('not.contain.text', content);
});