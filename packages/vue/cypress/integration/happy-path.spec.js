const element = (name) => `[data-testid=${name}]`;

const selectors = {
	hero: {
		ctaButton: element("hero-cta-button"),
		prevArrowButton: element("hero-prev-button"),
		nextArrowButton: element("hero-next-button"),
		bullets: element("hero-bullets"),
		items: element("hero-item"),
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
	checkout: {
		stepsProgress: element("steps-progress"),
		stepsButtons: element("steps-button"),
		nextButton: element("button-next"),
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

	// cart: {
	// 	icon: element('header-minicart'),
	// 	// Can't use v-cypress directive because of https://github.com/vuejs/vue-loader/issues/1433
	// 	indicator: `${ element('header-minicart') } .cart-badge`,
	// 	items: element('collected-product-cart-sidebar')
	// },
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
		cy.iframe().find(selectors.details.loginButton).click();
		cy.iframe()
			.find(selectors.details.firstNameInput)
			.type("John")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.details.lastNameInput)
			.type("Doe")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.details.emailInput)
			.type("john.doe@vsf.io")
			.should("have.class", "has-text");
		cy.iframe()
			.find(`${selectors.details.createAccountCheckbox} input`)
			.check({ force: true });
		cy.iframe()
			.find(selectors.details.createAccountCheckbox)
			.should("have.class", "is-active");
		cy.iframe()
			.find(selectors.details.createPasswordInput)
			.should("be.visible")
			.parents(".sf-input")
			.type("password")
			.should("have.class", "has-text")
			.find(".sf-icon")
			.click()
			.should("not.have.class", "hidden");
		cy.iframe()
			.find(selectors.checkout.nextButton)
			.contains("Go to shipping")
			.click();
		cy.iframe()
			.find(selectors.checkout.stepsProgress)
			.should("have.css", "--_steps-progress-active-step", "2");
	});
	it("test Shipping step", () => {
		cy.iframe().find(selectors.checkout.nextButton).click();

		cy.iframe()
			.find(selectors.shipping.firstNameInput)
			.type("John")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.shipping.lastNameInput)
			.type("Doe")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.shipping.streetName)
			.type("Dollar Street")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.shipping.city)
			.type("Pound Town")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.shipping.state)
			.type("Euro Region")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.shipping.zipCode)
			.type("55-555")
			.should("have.class", "has-text");
		cy.iframe()
			.find(`${selectors.shipping.country} select`)
			.select("Poland")
			.parent()
			.should("have.class", "is-selected");
		cy.iframe()
			.find(selectors.shipping.phone)
			.type("071 666 999")
			.should("have.class", "has-text");
		cy.iframe()
			.find(selectors.shipping.shippingMethod)
			.find("[value='inpost']")
			.check("inpost", { force: true })
			.siblings(".sf-radio__checkmark")
			.should("have.class", "is-active");
		cy.iframe()
			.find(selectors.checkout.nextButton)
			.contains("Go to payment")
			.click();
		cy.iframe()
			.find(selectors.checkout.stepsProgress)
			.should("have.css", "--_steps-progress-active-step", "3");
	});
});
