import { DetailsPageObject } from '../support/pageObject/DetailsPageObject';
import { HomePageObject } from '../support/pageObject/HomePageObject';

const homePage = new HomePageObject();
const detailsPage = new DetailsPageObject();

describe('HomePageTests', () => {
  it('Vue Instalation content', () => {
    cy.visit('/');
    homePage.installForVueButton.click();
    detailsPage.frameworkName.should('contain.text', 'Vue');
    detailsPage.header(`installation`).should('contain.text', `Installation`);
    cy.fixture('installationExamplesVue.json').then((examples) => {
      examples.forEach((example) => {
        cy.get('button').contains(`${example.button}`).click();
        detailsPage.title(`${example.framework}`).should('contain.text', `${example.app}`);
      });
    });
  });

  it('React instalation content', () => {
    cy.visit('/');
    homePage.installForReactButton.click();
    detailsPage.frameworkName.should('contain.text', 'React');
    detailsPage.header(`installation`).should('contain.text', `Installation`);
    cy.fixture('installationExamplesReact.json').then((examples) => {
      examples.forEach((example) => {
        cy.get('button').contains(`${example.button}`).click();
        detailsPage.title(`${example.framework}`).should('contain.text', `${example.app}`);
      });
    });
  });
});

describe('All Sections check', () => {
  it('Check content for Vue', () => {
    cy.visit('/');
    homePage.installForVueButton.click();
    cy.fixture('elements.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/vue${element.url}"]`).first().click();
        detailsPage.frameworkName.should('contain.text', 'Vue');
        detailsPage.header(`${element.className}`).should('contain.text', `${element.name}`);
      });
    });
  });
  it('Check content for React', () => {
    cy.visit('/');
    homePage.installForReactButton.click();
    cy.fixture('elements.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/react${element.url}"]`).first().click();
        detailsPage.frameworkName.should('contain.text', 'React');
        detailsPage.header(`${element.className}`).should('contain.text', `${element.name}`);
      });
    });
  });
});
