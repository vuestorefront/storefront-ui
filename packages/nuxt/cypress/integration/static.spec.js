describe("Static page", () => {
  it('successfully loads', () => {
    cy.visit('/static')
  })
  it("test SfTabs", () => {
    cy.get(".sf-tabs__tab")
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
  it("test Content pages list", () => {
    cy.get(".sf-content-pages__list-item")
      .its('length')
      .should('eq', 7)
      .get(".sf-content-pages__list-item")
      .eq(1)
      .click()
      .get(".sf-tabs__tab")
      .find("button")
      .first()
      .contains('Size guide')
      .and("have.class", "is-active")
  });
});
