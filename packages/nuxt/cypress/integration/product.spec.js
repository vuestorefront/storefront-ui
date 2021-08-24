import selectors from "../selectors/index.js";

describe("Product page", () => {
  it('successfully loads', () => {
    cy.visit('/product')
  })
  it("test SfGallery", () => {
    cy.get(".sf-gallery")
      .find("button")
      .eq(1)
      .should('not.have.class', 'sf-gallery__item--selected')
      .get(".sf-gallery__thumbs")
      .find("button")
      .eq(1)
      .click()
      .should('have.class', 'sf-gallery__item--selected')
  });
  it("test SfSelect", () => {
    cy.get(".sf-select")
      .should('not.have.class', 'is-selected')
      .get(".sf-select")
      .find("select")
      .select('34')
      .should('have.value', '34')
      .get(".sf-select")
      .should("have.class", "is-selected")
  });
  it("test SfColor", () => {
    cy.get(".sf-color")
      .last()
      .should("not.have.class", "is-active")
      .get(".sf-color")
      .last()
      .click()
      .should("have.class", "is-active")
  });
  it("test SfAddToCart", () => {
    cy.get('.sf-add-to-cart')
      .find("input")
      .should('have.value', '1')
      .get(selectors.quantitySelector.increaseQuantity)
      .click()
      .get('.sf-add-to-cart')
      .find("input")
      .should('have.value', '2')
      .get('.sf-add-to-cart')
      .find("input")
      .clear()
      .type("32{del}")
      .get('.sf-add-to-cart')
      .find("input")
      .should('have.value', '32')
      .get(selectors.quantitySelector.decreaseQuantity)
      .click()
      .get('.sf-add-to-cart')
      .find("input")
      .should('have.value', '31')
  });
  it("test SfTabs", () => {
    cy.get(".sf-tabs")
      .find("button")
      .first()
      .should("have.class", "is-active")
      .get(selectors.readAllReviews)
      .click()
      .get(".sf-tabs")
      .find("button")
      .first()
      .should("not.have.class", "is-active")
      .get(".sf-tabs")
      .find("button")
      .eq(1)
      .should("have.class", "is-active")
  });
});