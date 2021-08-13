const element = (name) => `[data-testid=${name}]`;

const selectors = {
  // Home page elements

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
    termsCheckbox: element("terms"),
  },

  // Login/singin page elements

  login: {
    openModalButton: element("open-modal-button"),
    openLoginButton: element("log-in-button"),
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
    breadcrumbs: element("breadcrumb"),
  },
  profile: {
    myProfileButton: element("my-profile"),
    myProfileTabs: element("my-profile-tabs"),
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
    shippingDetailsTabs: element("shipping-details-tabs"),
    changeButton: element("change-address"),
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
    orderHistoryButton: element("Order history"),
    orderHistoryTabs: element("order-history-tabs"),
    downloadAllButton: element("download-all-button"),
    viewDetailsButtons: element("view-details-button"),
  },
  logOut: {
    logOutButton: element("Log out"),
  },

  // Cart

  collectedProduct: {
    removeButton: element('collected-product-desktop-remove'),
  },

  // Category page

  pagination: {
    prevArrow: element('pagination-button-prev'),
    nextArrow: element('pagination-button-next')
  },

  // Product page

  quantitySelector: {
    increaseQuantity: element('increase'),
    decreaseQuantity: element('decrease')
  },
  readAllReviews: element('read-all-reviews')
};

export default selectors;
