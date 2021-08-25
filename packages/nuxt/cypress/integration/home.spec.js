import selectors from "../selectors/index.js";

describe("Home page", () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it("test SfHero component", () => {
    cy.get(selectors.hero.items)
      .first()
      .should("have.class", "glide__slide--active")
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
      .click({ multiple: true, force: true })
      .get(selectors.hero.bullets)
      .eq(1)
      .click()
      .get(selectors.hero.items)
      .last()
      .should("have.class", "glide__slide--active")
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
    cy.get(".sf-carousel-item:not(.glide__slide--clone)")
      .first()
      .should("have.class", "glide__slide--active")
      .get(selectors.carousel.productCard)
      .get(selectors.carousel.prevArrowButton)
      .click({ multiple: true })
      .get(".sf-carousel-item.glide__slide--clone")
      .first()
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
