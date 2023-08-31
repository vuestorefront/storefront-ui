const fixtureData = require('../fixtures/sample.json');
describe('Sample Test suite', () => {
    it('Sample test', () => {
        // ACT - visit home page
        cy.visit("/")

        // ASSERT - check the url (just sample)
        cy.url().should('contain', `https://`);

    });
});
