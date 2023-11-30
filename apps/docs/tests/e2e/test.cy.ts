import { DetailsPageObject } from '../support/pageObject/DetailsPageObject.PageObject';
import { HomePageObject } from '../support/pageObject/HomePageObject.PageObject';

const homePage = () => new HomePageObject();
const detailsPage = () => new DetailsPageObject();

describe.skip('HomePageTests', () => {
  it('Vue Instalation content', () => {
    cy.visit('/');
  });
});
