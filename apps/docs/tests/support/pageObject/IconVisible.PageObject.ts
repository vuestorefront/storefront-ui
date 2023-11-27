export class IconVisiblePageObject {
    iconVisible(){
      return this.checkIconVisibilityInIframe;
    }


    checkIconVisibilityInIframe() {
     return cy.get(':nth-child(4) > .flex-1 > .pt-4 > .custom-block > .w-full')
        .should('be.visible')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body');
          cy.fixture<Record<string, string>[]>('iconTestId.json').then((elements) => {
            elements.forEach((element) => {
               cy.wrap($body).find(`[data-testid="${element.testid}"]`).should('be.visible');
            });
        });
      });
    };
 }