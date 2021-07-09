import selectors from "../selectors/index.js";

describe("Cart page", () => {
  it('successfully loads', () => {
    cy.visit('/cart')
  })
  it("test SfCollectedProduct", () => {
    cy.get(".collected-product")
      .its('length')
      .should('eq', 3)
      .get(".collected-product")
      .first()
      .find(selectors.collectedProduct.removeButton)
      .click({force: true})
      .wait(500)
      .get(".collected-product")
      .its('length')
      .should('eq', 2)
  });
  it("test Empty cart", () => {
    cy.get(".collected-product")
      .find(selectors.collectedProduct.removeButton)
      .first()
      .click({force: true})
      .wait(500)
      .get(".collected-product")
      .find(selectors.collectedProduct.removeButton)
      .first()
      .click({force: true})
      .wait(500)
      .get(".sf-sidebar")
      .find(".sf-sidebar__content")
      .contains("Your cart is empty")
  });
});