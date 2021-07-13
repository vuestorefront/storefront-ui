import selectors from "../selectors/index.js";

describe("Login/signin page", () => {
  it("successfully loads", () => {
    cy.visit("/login");
  });
  it("test Login modal", () => {
    cy.get(selectors.login.openModalButton)
      .click()
      .get(selectors.login.openLoginButton)
      .click()
      .get(selectors.login.emailInput)
      .type("johndoe@vuestorefront.io")
      .should("have.class", "has-text")
      .get(selectors.login.passwordInput)
      .type("password")
      .should("have.class", "has-text")
      .get(".sf-input__password-button")
      .click()
      .should("not.have.class", "hidden")
      .get(`${selectors.login.rememberCheckbox} input`)
      .check({ force: true })
      .parents(selectors.login.rememberCheckbox)
      .should("have.class", "is-active")
      .get(selectors.login.loginButton)
      .click()
      .get(selectors.login.forgottenPasswordButton)
      .click()
      .get(selectors.login.closeButton)
      .click();
  });
  it("test Signin modal", () => {
    cy.get(selectors.login.openModalButton)
      .click()
      .get(selectors.login.registerButton)
      .click()
      .get(selectors.signin.firstNameInput)
      .type("John")
      .should("have.class", "has-text")
      .get(selectors.signin.lastNameInput)
      .type("Doe")
      .should("have.class", "has-text")
      .get(selectors.signin.emailInput)
      .type("johndoe@vuestorefront.io")
      .should("have.class", "has-text")
      .get(selectors.signin.passwordInput)
      .type("password")
      .should("have.class", "has-text")
      .get(selectors.signin.createAccountButton)
      .click()
      .get(selectors.signin.loginAccountButton)
      .click()
      .should("be.visible", selectors.signin.signinModal);
  });
});
