import { ChangeFrameworkObject } from '../support/pageObject/ChangeFramework.PageObject';
import { DetailsPageObject } from '../support/pageObject/DetailsPageObject.PageObject';
import { HomePageObject } from '../support/pageObject/HomePageObject.PageObject';

const homePage = () => new HomePageObject();
const detailsPage = () => new DetailsPageObject();
const changeFramework = () => new ChangeFrameworkObject();

describe('Check if change Framework works ', () => {
  it(' From vue to react and from react to vue', () => {
    cy.visit('/');
    homePage().clickInstallForVue();
    detailsPage().hasFrameworkName('Vue');
    changeFramework().clickFrameworkDropdown();

    cy.get(`a[href="/v2/react/getting-started.html"]`).first().click();
    detailsPage().hasFrameworkName('React');
    changeFramework().clickFrameworkDropdown();

    cy.get(`a[href="/v2/vue/getting-started.html"]`).first().click();
    detailsPage().hasFrameworkName('Vue');
  });
});
