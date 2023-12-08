import { IconVisiblePageObject } from '../support/pageObject/IconVisible.PageObject';

const iconVisible = () => new IconVisiblePageObject();

describe('Icons visible', () => {
  it('vue icons check', () => {
    cy.visit('/vue/components/iconbase.html');
    iconVisible().checkIconVisibilityInIframe();
  });

  it('react icons check', () => { 
    cy.visit('/react/components/iconbase.html');
    iconVisible().checkIconVisibilityInIframe();
  });
});


