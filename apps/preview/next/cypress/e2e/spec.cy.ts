describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3002/examples');

    cy.get('a').contains('VsfDivider').click();
  });
});
