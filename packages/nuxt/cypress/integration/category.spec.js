import selectors from "../selectors/index.js";

describe("Category page", () => {
  it('successfully loads', () => {
    cy.visit('/category')
  })
  it("test SfAccordion", () => {
    cy.get(".sf-accordion")
      .find("button")
      .first()
      .should("have.class", "is-open")
      .get(".sf-accordion")
      .find("button")
      .last()
      .should("not.have.class", "is-open")
      .get(".sf-accordion")
      .find("button")
      .last()
      .click()
      .should("have.class", "is-open")
  });
  it("test SfPagination", () => {
    cy.get(".sf-pagination")
      .find(".sf-pagination__item")
      .eq(2)
      .click()
      .url()      
      .should('eq', 'http://localhost:3000/Category?page=2')
      .wait(10000)
      .get(selectors.pagination.prevArrow)      
      .click()
      .url()
      .should('eq', 'http://localhost:3000/Category?page=1')
      .get(selectors.pagination.nextArrow)
      .click()
      .url()
      .should('eq', 'http://localhost:3000/Category?page=2')      
  });
  it("test SfSidebar", () => {
    cy.get(".sidebar-filters")
      .should('not.to.have.descendants')
      .get(".navbar__filters-button")
      .click()
      .get(".sidebar-filters")
      .children()
      .should('be.visible')
      .get(".sf-sidebar__circle-icon")
      .click()
      .get(".sidebar-filters")
      .should('not.to.have.descendants')
  });
  it("test SfFilters", () => {
    cy.get(".navbar__filters-button")
      .click()
      .get("[data-testid='Summer fly']")
      .should("not.have.class", "is-active")
      .click()
      .should("have.class", "is-active")
  });
  it("test SfColor", () => {
    cy.get(".filters__color")
      .eq(3)
      .should("not.have.class", "is-active")
      .click()
      .should("have.class", "is-active")
  });
  it("test SfSidebar 'Clear all' button", () => {
    cy.get(".filters__button-clear")
      .click()
      .get(".filters__color")
      .eq(3)
      .should("not.have.class", "is-active")
      .get("[data-testid='Summer fly']")
      .should("not.have.class", "is-active")
  });
  it("test SfSidebar 'Done' button", () => {
    cy.get(".filters__buttons>.sf-button--full-width")
      .first()
      .click()
      .get(".sidebar-filters")
      .children()
      .should('have.length', 0)
  });
  it("test List and grid view", () => {
    cy.get(".navbar__view-icon")
      .first()
      .click()
      .get(".products")
      .children()
      .should("have.class", "products__grid")
      .get(".navbar__view-icon")
      .last()
      .click()
      .get(".products")
      .children()
      .should("have.class", "products__list")
  });
});