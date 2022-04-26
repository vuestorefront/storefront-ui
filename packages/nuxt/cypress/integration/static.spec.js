describe("Static page", () => {
  it('successfully loads', () => {
    cy.visit('/static')
  })
  it("test SfTabs", () => {
    cy.get(".sf-content-page")
    .first()
    .find(".sf-tabs__tab")
      .its('length')
      .should('eq', 3)
      .get(".sf-tabs__tab")
      .first()
      .find("button")
      .contains('Security')
      .get(".sf-tabs__tab")
      .eq(1)
      .find("button")
      .click({force: true})
      .get(".sf-tabs__content__tab")
      .contains("This privacy policy")
  });
});
