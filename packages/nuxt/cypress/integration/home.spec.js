import selectors from "../selectors/index.js";

describe("Home page", () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it("test SfHero component", () => {
    cy.get(".sf-hero")
      .find(selectors.hero.items)
      .first()
      .should("be.visible")
      .get(selectors.hero.prevArrowButton)
      .click({ multiple: true })
      .get(selectors.hero.items)
      .first()
      .should("not.have.class", "glide__slide--active")
      .get(selectors.hero.nextArrowButton)
      .click({ multiple: true })
      .get(selectors.hero.items)
      .first()
      .should("not.have.class", "glide__slide--active")
      .get(selectors.hero.ctaButton)
      .first()
      .click()
      .get(selectors.hero.bullets)
      .find("button")
      .eq(1)
      .click({ multiple: true })
      .get(".sf-hero")
      .find(selectors.hero.items)
      .eq(1)
      .should("be.visible")
  });
  it("test SfBannerGrid component", () => {
    cy.get(selectors.bannerGrid.ctaButton)
      .click({ multiple: true, force: true })
      .get(selectors.hero.nextArrowButton)
      .click({ multiple: true })
  });
  it("test SfCallToAction component", () => {
    cy.get(selectors.callToAction.button)
      .click()
  });
  it("test SfCarousel component", () => {
    cy.get(".sf-carousel")
      .find(".sf-carousel-item")
      .its('length')
      .should('be.gte', 8)
      .get(selectors.carousel.prevArrowButton)
      .click({ multiple: true })
      .get(".sf-carousel-item")
      .last()
      .should("not.be.visible")
      .get(selectors.carousel.nextArrowButton)
      .click({ multiple: true })
      .get(selectors.carousel.productCard)
      .eq(7)
      .get(selectors.carousel.productCardWishlistButton)
      .eq(7)
      .should("not.have.class", "on-wishlist")
      .click({ force: true })
      .get(selectors.carousel.productCard)
      .first()
      .get(selectors.carousel.productCardAddIcon)
      .eq(7)
      .click({ force: true })
  });
  it("test Instagram Section component", () => {
    cy.get(selectors.instagramSection.images)
      .get(".sf-image--overlay")
  });
  it("test SfBanner component", () => {
    cy.get(selectors.banner.banner)
      .get(selectors.banner.buttons)
      .first()
      .click()
      .get(".sf-image")
      .get(selectors.banner.banner)
      .last(selectors.banner.buttons)
      .click()
      .get(".sf-image")
  });
});
