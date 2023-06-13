import { DetailsPageObject } from '../support/pageObject/DetailsPageObject.PageObject';
import { HomePageObject } from '../support/pageObject/HomePageObject.PageObject';

const homePage = () => new HomePageObject();
const detailsPage = () => new DetailsPageObject();

describe('HomePageTests', () => {
  it('Vue Instalation content', () => {
    cy.visit('/');
    homePage().clickInstallForVue();
    detailsPage().isFramework('Vue').hasHeaderText('installation', 'Installation');

    cy.fixture<Record<string, string>[]>('installationExamplesVue.json').then((examples) => {
      examples.forEach((example) => {
        cy.get('button').contains(`${example.button}`).click();
        detailsPage().hasTitle(example.framework, example.app);
      });
    });
  });

  it('React installation content', () => {
    cy.visit('/');
    homePage().clickInstallForReact();
    detailsPage().isFramework('React').hasHeaderText('installation', 'Installation');

    cy.fixture<Record<string, string>[]>('installationExamplesReact.json').then((examples) => {
      examples.forEach((example) => {
        cy.get('button').contains(`${example.button}`).click();
        detailsPage().hasTitle(example.framework, example.app);
      });
    });
  });
});

describe('All Sections check', () => {
  it('Check content for Vue', () => {
    cy.visit('/');
    homePage().clickInstallForVue();
    cy.fixture<Record<string, string>[]>('elements.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/vue${element.url}"]`).first().click();
        detailsPage().hasFrameworkName('Vue').hasHeaderText(element.className, element.name);
      });
    });
  });

  it('Check content for React', () => {
    cy.visit('/');
    homePage().clickInstallForReact();
    cy.fixture<Record<string, string>[]>('elements.json').then((elements) => {
      elements.forEach((element) => {
        cy.get(`a[href="/v2/react${element.url}"]`).first().click();
        detailsPage().hasFrameworkName('React').hasHeaderText(element.className, element.name);
      });
    });
  });
});
