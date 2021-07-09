import selectors from "../selectors/index.js";

describe("Detailed cart page", () => {
  it('successfully loads', () => {
    cy.visit('/detailed-cart')
  })
  it("test SfCollectedProduct", () => {
    cy.get(".collected-product-list")
      .find(".sf-collected-product")
      .its('length')
      .should('eq', 3)
      .get(".collected-product-list")
      .find(".sf-collected-product")
      .first()
      .find(selectors.collectedProduct.removeButton)
      .click()
      .wait(2000)
      .get(".collected-product-list")
      .find(".sf-collected-product")
      .its('length')
      .should('eq', 2)
  });
  it("test Empty list", () => {
    cy.get(".collected-product-list")
      .find(".sf-collected-product")
      .first()
      .find(selectors.collectedProduct.removeButton)
      .click()
      .wait(2000)
      .get(".collected-product-list")
      .find(".sf-collected-product")
      .first()
      .find(selectors.collectedProduct.removeButton)
      .click()
      .wait(2000)
      .get(".detailed-cart__main")
      .contains("Your cart is empty")
  });
});