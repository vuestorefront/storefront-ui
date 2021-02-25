const element = (name) => `[data-testid=${name}]`;

const selectors = {

  // Home page elements

  hero: {
    ctaButton: element("hero-cta-button"),
    prevArrowButton: element("hero-prev-button"),
    nextArrowButton: element("hero-next-button"),
    bullets: element("hero-bullets"),
    items: element("hero-item")
  },
  bannerGrid: {
    ctaButton: element("banner-cta-button"),
  },
  callToAction: {
    button: element("cta-button"),
  },
  carousel: {
    prevArrowButton: element("carousel-prev-button"),
    nextArrowButton: element("carousel-next-button"),
    productCard: element("product-card"),
    productCardWishlistButton: element("product-wishlist-button"), 
    productCardAddIcon: element("product-add-icon"), 
  },
  instagramSection: {
    images: element("image-wrapper"),
  },
  banner: {
    banner: element("application-banner"),
    buttons: element("banner-cta-button"),
    images: element("image-wrapper"),
  },

  // Checkout page elements

  checkout: {
    stepsProgress: element("steps-progress"),
    stepsButtons: element("steps-button"),
    nextButton: element("next-button"),
    shippingStep: element("shipping"),
    paymentStep: element("payment"),
    reviewStep: element("review"),
  },
  summary: {
    applyButton: element("apply-button"),
    promoCode: element("promoCode"),
  },
  details: {
    loginButton: element("login-button"),
    firstNameInput: element("firstName"),
    lastNameInput: element("lastName"),
    emailInput: element("email"),
    createAccountCheckbox: element("create-account-checkbox"),
    createPasswordInput: element("create-password-input"),
  },
  shipping: {
    firstNameInput: element("firstName"),
    lastNameInput: element("lastName"),
    streetName: element("streetName"),
    city: element("city"),
    state: element("state"),
    zipCode: element("zipCode"),
    country: element("country"),
    phone: element("phone"),
    shippingMethod: element("shipping-method"),
  },
  payment: {
    addressCheckbox: element("copyShippingAddress"),
    firstNameInput: element("firstName"),
    lastNameInput: element("lastName"),
    streetName: element("streetName"),
    city: element("city"),
    state: element("state"),
    zipCode: element("zipCode"),
    country: element("country"),
    phone: element("phone"),
    invoiceCheckbox: element("getInvoice"),
    paymentMethod: element("payment-methods"),
  },
  review: {
    personalEditButton: element("personal-edit-button"),
    shippingEditButton: element("shipping-edit-button"),
    billingEditButton: element("billing-edit-button"),
    paymentEditButton: element("payment-edit-button"),
    applyButton: element("apply-button"),
    promoCode: element("promoCode"),
    productTableRow: element("product-table-row"),
    productDescription: element("product-description-table-data"),
    productImage: element("product-image-table-data"),
    termsCheckbox: element("terms")
  },

  // Login/singin page elements

  login: {
    loginModal: element("login-modal"),
    emailInput: element("email"),
    passwordInput: element("password"),
    rememberCheckbox: element("remember-me"),
    loginButton: element("log-in-button"),
    forgottenPasswordButton: element("forgotten-password-button"),
    registerButton: element("register-now-button"),
    closeButton: element("close-button"),
  },
  signin: {
    signinModal: element("signin-modal"),
    firstNameInput: element("first-name"),
    lastNameInput: element("last-name"),
    emailInput: element("email"),
    passwordInput: element("password"),
    createAccountButton: element("create-acount-button"),
    loginAccountButton: element("log-in-account"),
  },

  // MyAccount page elements

  myAccount: {
    breadcrumbs: element("breadcrumb")
  },
  profile: {
    myProfileButton: element("my-profile"),
    peronalDataTab: element("personal-data"),
    passwordChangeTab: element("password-change"),
    firstNameInput: element("firstName"),
    lastNameInput: element("lastName"),
    emailInput: element("email"),
    saveChangesButton: element("save-changes-button"),
    // Password change tab
    currentPasswordInput: element("currentPassword"),
    newPasswordInput: element("newPassword"),
    repeatPasswordInput: element("repeatPassword"),
    updatePasswordButton: element("update-password-button"),
  },
  shippingDetails: {
    shippingDetailsButton: element("Shipping details"),
    shippingDetailsTab: element("shipping-details-tab"),
    changeButton: element("change-address"),
    changeAddressTab: element("change-address-tab"),
    deleteButton: element("delete-address"),
    firstNameInput: element("firstName"),
    lastNameInput: element("lastName"),
    streetNameInput: element("streetName"),
    apartmentInput: element("apartment"),
    city: element("city"),
    state: element("state"),
    zipCode: element("zipCode"),
    country: element("country"),
    phone: element("phone"),
    updateAddressButton: element("update-address-button"),
    addNewAddressButton: element("add-new-address"),
    shippingAddressItems: element("shipping-address-list-item"),
  },
  newsletter: {
    newsletterButton: element("Newsletter"),
    myNewsletterTab: element("newsletter-tab"),
    womanCheckbox: element("Woman"),
    manCheckbox: element("Man"),
    childrenCheckbox: element("Children"),
    saveChangesButton: element("save-changes-button"),
  },
  orderHistory: {
    orderHistoryButton: element("Newsletter"),
    myOrdersTab: element("my-orders"),
    returnsTab: element("returns"),
    downloadAllButton: element("download-all-button"),
    viewDetailsButtons: element("view-details-button"),
  },
  logOut: {
    logOutButton: element("Log out"),
  }
};

describe("Home page", () => {
  // beforeEach(() => {
  //   cy.visit("/?path=/story/pages-home--common");
  // });
  // it("test SfHero component", () => {
  //   cy.iframe().find(selectors.hero.items).first().should("have.class", "glide__slide--active");
  //   cy.iframe().find(selectors.hero.prevArrowButton).click({ multiple: true })
  //   cy.iframe().find(selectors.hero.items).first().should("not.have.class", "glide__slide--active");
  //   cy.iframe().find(selectors.hero.nextArrowButton).click({ multiple: true });
  //   cy.iframe().find(selectors.hero.items).first().should("not.have.class", "glide__slide--active");
  //   cy.iframe().find(selectors.hero.ctaButton).click({ multiple: true, force: true });
  //   cy.iframe().find(selectors.hero.bullets).click({ multiple: true });
  //   cy.iframe().find(selectors.hero.items).first().should("not.have.class", "glide__slide--active");

  //   // Open 'Women' category
  //   // cy.contains('WOMEN').click().wait(2000);
  //   // cy.url().should('include', '/c/women');

  //   // // Open first product
  //   // cy.get(selectors.catalog.products).first().click().wait(2000);
  //   // cy.url().should('include', '/p/');

  //   // // Check if cart is empty
  //   // cy.get(selectors.cart.indicator).should('not.exist');

  //   // // Add product to cart
  //   // cy.get(selectors.product.addToCart).click().wait(2000);

  //   // // Check if cart is not empty
  //   // cy.get(selectors.cart.indicator).should('exist');

  //   // // Open minicart
  //   // cy.get(selectors.cart.icon).click();

  //   // // Check if product is listen in minicart
  //   // cy.get(selectors.cart.items).should('have.length', 1);

  //   // // Go to checkout
  //   // cy.contains('Go to checkout').click().wait(500);
  //   // cy.url().should('include', 'checkout/personal-details');

  //   // // Type personal details
  //   // cy.get(selectors.checkout.personalDetails.firstNameInput).type('First');
  //   // cy.get(selectors.checkout.personalDetails.lastNameInput).type('Last');
  //   // cy.get(selectors.checkout.personalDetails.emailInput).type('fake@example.com');

  //   // // Go to shipping details
  //   // cy.get(selectors.checkout.continueButton).click().wait(500);
  //   // cy.url().should('include', 'checkout/shipping');

  //   // // Type shipping details
  //   // cy.get(selectors.checkout.shipping.streetName).type('Street');
  //   // cy.get(selectors.checkout.shipping.apartmentNumber).type('123');
  //   // cy.get(selectors.checkout.shipping.cityName).type('City');
  //   // cy.get(selectors.checkout.shipping.zipCode).type('12345');
  //   // cy.get(selectors.checkout.shipping.phoneNumber).type('123456789');
  //   // cy.ifElementExists(selectors.checkout.shipping.state, element => element.type('State'));

  //   // // Select first country from the dropdown
  //   // cy
  //   //   .get(`${selectors.checkout.shipping.countryName} option`)
  //   //   .eq(0)
  //   //   .then(element => cy.get(`${selectors.checkout.shipping.countryName} select`).select(element.val()));

  //   // // Show shipping methods
  //   // cy.get(selectors.checkout.continueButton).click().wait(500);
  //   // cy.get(`${selectors.checkout.shipping.methods} label`).first().click();

  //   // // Go to payment
  //   // cy.get(selectors.checkout.continueButton).click().wait(500);
  //   // cy.url().should('include', 'checkout/payment');

  //   // // Copy shipping details to payment
  //   // cy.get(selectors.checkout.payment.copyFromShipping).click();

  //   // // Show payment methods
  //   // cy.get(selectors.checkout.continueButton).click().wait(500);
  //   // cy.get(selectors.checkout.payment.paymentMethods).first().click();

  //   // // Go to review
  //   // cy.get(selectors.checkout.continueButton).click().wait(500);
  //   // cy.url().should('include', 'checkout/order-review');

  //   // // Complete order
  //   // cy.get(selectors.checkout.termsCheckbox).click().wait(500);
  //   // cy.get(selectors.checkout.submitButton).click().wait(500);
  //   // cy.url().should('include', 'checkout/thank-you');
  // });
  // it("test SfBannerGrid component", () => {
  //   cy.iframe().find(selectors.bannerGrid.ctaButton).click({ multiple: true, force: true });
  //   // cy.iframe().find(selectors.hero.nextArrowButton).click({ multiple: true });
  // });
  // it("test SfCallToAction component", () => {
  //   cy.iframe().find(selectors.callToAction.button).click();
  //   // cy.iframe().find(selectors.hero.nextArrowButton).click({ multiple: true });
  // });
  // it("test SfCarousel component", () => {
  //   // cy.iframe().find(`${selectors.carousel.productCard}:not(glide__slide--clone)`).first().should("be.visible");
  //   cy.iframe().find(selectors.carousel.prevArrowButton).click({ multiple: true });
  //   cy.iframe().find(selectors.carousel.productCard).first().should("not.be.visible");
  //   cy.iframe().find(selectors.carousel.nextArrowButton).click({ multiple: true });
  //   cy.iframe().find(selectors.carousel.productCard).first().should("not.be.visible");
  //   cy.iframe().find(selectors.carousel.productCard).first().find(selectors.carousel.productCardWishlistButton).should("not.have.class", "on-wishlist").click({force:true})
  //   cy.iframe().find(selectors.carousel.productCard).first().find(selectors.carousel.productCardAddIcon).click({ force: true })
  // });
  // it("test Instagram Section component", () => {
  //   cy.iframe().find(selectors.instagramSection.images).find(".sf-image--overlay");
  // });
  // it("test SfBanner component", () => {
  //   cy.iframe().find(selectors.banner.banner).find(selectors.banner.buttons).first().click().find(".sf-image");
  //   cy.iframe().find(selectors.banner.banner).last(selectors.banner.buttons).click().find(".sf-image");
  // });
});

describe("Checkout page", () => {
  beforeEach(() => {
    cy.visit("/?path=/docs/pages-checkout--common");
  });
  it("test Details step", () => {
    // cy.iframe().find(selectors.details.loginButton).click();
    // cy.iframe().find(selectors.details.firstNameInput).type("John").should("have.class", "has-text");
    // cy.iframe().find(selectors.details.lastNameInput).type("Doe").should("have.class", "has-text");
    // cy.iframe().find(selectors.details.emailInput).type("john.doe@vsf.io").should("have.class", "has-text");
    // cy.iframe().find(`${selectors.details.createAccountCheckbox} input`).check({force: true})
    // cy.iframe().find(selectors.details.createAccountCheckbox).should("have.class", "is-active")
    // cy.iframe().find(selectors.details.createPasswordInput).should("be.visible") 
    //   .parents(".sf-input").type("password").should("have.class", "has-text")
    //   .find(".sf-icon").click().should("not.have.class", "hidden");
    // cy.iframe().find(selectors.summary.promoCode).type("1a2b1c2d1e2f").should("have.class", "has-text");
    // cy.iframe().find(selectors.summary.applyButton).click();
    // cy.iframe().find(selectors.checkout.nextButton).contains("Go to shipping").click();
    // cy.iframe().find(selectors.checkout.stepsProgress).should("have.css", "--_steps-progress-active-step", "2");
    })
    it("test Shipping step", () => {
      // cy.iframe().find(selectors.checkout.nextButton).click();

      // cy.iframe().find(selectors.shipping.firstNameInput).type("John").should("have.class", "has-text");
      // cy.iframe().find(selectors.shipping.lastNameInput).type("Doe").should("have.class", "has-text");
      // cy.iframe().find(selectors.shipping.streetName).type("Dollar Street").should("have.class", "has-text");
      // cy.iframe().find(selectors.shipping.city).type("Pound Town").should("have.class", "has-text");
      // cy.iframe().find(selectors.shipping.state).type("Euro Region").should("have.class", "has-text");
      // cy.iframe().find(selectors.shipping.zipCode).type("55-555").should("have.class", "has-text");
      // cy.iframe().find(`${selectors.shipping.country} select`).select("Poland").parent().should("have.class", "is-selected");
      // cy.iframe().find(selectors.shipping.phone).type("071 666 999").should("have.class", "has-text");
      // cy.iframe().find(selectors.shipping.shippingMethod).find("[value='inpost']").check("inpost", {force: true}).siblings(".sf-radio__checkmark").should("have.class", "is-active");
      // cy.iframe().find(selectors.checkout.nextButton).contains("Go to payment").click();
      // cy.iframe().find(selectors.checkout.stepsProgress).should("have.css", "--_steps-progress-active-step", "3");
    })
    it("test Payment step", () => {
      // cy.iframe().find(selectors.checkout.nextButton).click().click();
      // cy.iframe().find(`${selectors.payment.addressCheckbox} input`).check({ force: true });
      // cy.iframe().find(selectors.payment.firstNameInput).type("John").should("have.class", "has-text");
      // cy.iframe().find(selectors.payment.lastNameInput).type("Doe").should("have.class", "has-text");
      // cy.iframe().find(selectors.payment.streetName).type("Dollar Street").should("have.class", "has-text");
      // cy.iframe().find(selectors.payment.city).type("Pound Town").should("have.class", "has-text");
      // cy.iframe().find(selectors.payment.state).type("Euro Region").should("have.class", "has-text");
      // cy.iframe().find(selectors.payment.zipCode).type("55-555").should("have.class", "has-text");
      // cy.iframe().find(`${selectors.payment.country} select`).select("Poland").parent().should("have.class", "is-selected");
      // cy.iframe().find(selectors.payment.phone).type("071 666 999").should("have.class", "has-text");
      // cy.iframe().find(`${selectors.payment.invoiceCheckbox} input`).check({force: true});
      // cy.iframe().find(selectors.payment.paymentMethod).find("[value='electron']").check("electron", {force: true}).siblings(".sf-radio__checkmark").should("have.class", "is-active");
      // cy.iframe().find(selectors.checkout.nextButton).contains("Pay for order").click();
      // cy.iframe().find(selectors.checkout.stepsProgress).should("have.css", "--_steps-progress-active-step", "4");       
    })

    it("test Review step", () => {
      // cy.iframe().find(selectors.checkout.nextButton).click().click().click();
      
      // cy.iframe().find(selectors.review.personalEditButton).click()
      // cy.iframe().find(selectors.checkout.stepsButtons).first().should("have.class", "current");
      // cy.iframe().find(selectors.checkout.nextButton).click().click().click();
      // cy.iframe().find(selectors.review.shippingEditButton).click()
      // cy.iframe().find(`${selectors.checkout.stepsButtons}:nth-of-type(2)`).should("have.class", "current");
      // cy.iframe().find(selectors.checkout.nextButton).click().click();
      // cy.iframe().find(selectors.review.billingEditButton).click();
      // cy.iframe().find(`${selectors.checkout.stepsButtons}:nth-of-type(3)`).should("have.class", "current");
      // cy.iframe().find(selectors.checkout.nextButton).click();
      // cy.iframe().find(selectors.review.paymentEditButton).click();
      // cy.iframe().find(selectors.checkout.nextButton).click();
      // cy.iframe().find(`${selectors.review.promoCode} #promoCode`).last().type("1a2b1c2d1e2f", { force: true }).parents(".sf-input").should("have.class", "has-text");
      // cy.iframe().find(selectors.review.applyButton).click();

      // cy.iframe().find(selectors.review.productTableRow).find(selectors.review.productImage);
      // cy.iframe().find(selectors.review.productTableRow).find(selectors.review.productDescription);
      // cy.iframe().find(`${selectors.review.termsCheckbox} input`).check({force: true});
      // cy.iframe().find(selectors.checkout.nextButton).contains("Confirm and pay").click();
      // cy.iframe().find(selectors.checkout.stepsProgress).should("have.css", "--_steps-progress-active-step", "5");
    })    
  });
  describe("Login/signin page", () => {
    beforeEach(() => {
      cy.visit("/?path=/story/pages-login-sign-in--common");
    });
    it("test Login modal", () => {
      cy.iframe().find(selectors.login.emailInput).type("johndoe@vuestorefront.io").should("have.class", "has-text");
      cy.iframe().find(selectors.login.passwordInput).type("password").should("have.class", "has-text").find(".sf-icon").click().should("not.have.class", "hidden");;
      cy.iframe().find(`${selectors.login.rememberCheckbox} input`).check({force: true}).parents(selectors.login.rememberCheckbox).should("have.class", "is-active");
      cy.iframe().find(selectors.login.loginButton).click();
      cy.iframe().find(selectors.login.forgottenPasswordButton).click();
      cy.iframe().find(selectors.login.closeButton).click();
      cy.iframe().find(selectors.login.registerButton).click().should("be.visible", selectors.login.loginModal);
    })
    it("test Signin modal", () => {
      cy.iframe().find(selectors.login.registerButton).click();
      cy.iframe().find(selectors.signin.firstNameInput).type("John").should("have.class", "has-text");
      cy.iframe().find(selectors.signin.lastNameInput).type("Doe").should("have.class", "has-text");
      cy.iframe().find(selectors.signin.emailInput).type("johndoe@vuestorefront.io").should("have.class", "has-text");
      cy.iframe().find(selectors.signin.passwordInput).type("password").should("have.class", "has-text");
      cy.iframe().find(selectors.signin.createAccountButton).click();
      cy.iframe().find(selectors.signin.loginAccountButton).click().should("be.visible", selectors.signin.signinModal);;
    })    
  });
  describe("MyAccount page", () => {
    beforeEach(() => {
      cy.visit("//?path=/story/pages-myaccount--common");      
    });
    it("test My profile", () => {
      cy.iframe().find(selectors.profile.myProfileButton).click();
      cy.iframe().find(`${selectors.profile.peronalDataTab} button`).click();
      cy.iframe().find(selectors.profile.firstNameInput).type("John").should("have.class", "has-text");
      cy.iframe().find(selectors.profile.lastNameInput).type("Doe").should("have.class", "has-text");
      cy.iframe().find(selectors.profile.emailInput).type("johndoe@vuestorefront.io").should("have.class", "has-text");
      cy.iframe().find(selectors.profile.saveChangesButton).click();

      cy.iframe().find(selectors.profile.passwordChangeTab).click();
      cy.iframe().find(selectors.profile.currentPasswordInput).type("password").should("have.class", "has-text");
      cy.iframe().find(selectors.profile.newPasswordInput).type("password123").should("have.class", "has-text");
      cy.iframe().find(selectors.profile.repeatPasswordInput).type("password123").should("have.class", "has-text");
      cy.iframe().find(selectors.profile.updatePasswordButton).click();
    })
    it("test Shipping Details", () => {
      cy.iframe().find(selectors.shippingDetails.shippingDetailsButton).click();
      cy.iframe().find(selectors.shippingDetails.changeButton).click().should("be.visible", selectors.shippingDetails.changeAddressTab);
      cy.iframe().find(selectors.shippingDetails.firstNameInput).type("John").should("have.class", "has-text");
      cy.iframe().find(selectors.shippingDetails.lastNameInput).type("Doe").should("have.class", "has-text");
      cy.iframe().find(selectors.shippingDetails.streetName).type("Dollar Street").should("have.class", "has-text");
      cy.iframe().find(selectors.shippingDetails.apartmentInput).type("66/66A").should("have.class", "has-text");
      cy.iframe().find(selectors.shippingDetails.city).type("Pound Town").should("have.class", "has-text");
      cy.iframe().find(selectors.shippingDetails.state).type("Euro Region").should("have.class", "has-text");
      cy.iframe().find(selectors.shippingDetails.zipCode).type("55-555").should("have.class", "has-text");
      cy.iframe().find(`${selectors.shippingDetails.country} select`).select("Poland").parent().should("have.class", "is-selected");
      cy.iframe().find(selectors.shippingDetails.phone).type("071 666 999").should("have.class", "has-text");
      cy.iframe().find(selectors.shippingDetails.updateAddressButton).click().should("be.visible", selectors.shippingDetails.shippingDetailsTab);
      const shippingAddressItemsAmount = cy.iframe().find(selectors.shippingDetails.shippingAddressItems).its("length");
      cy.iframe().find(selectors.shippingDetails.deleteButton).click().should("have.length", shippingAddressItemsAmount -1);
    })
    it("test Newsletter", () => {

    })
    it("test Order history", () => {

    })    
    it("test Log out", () => {

    })
  })