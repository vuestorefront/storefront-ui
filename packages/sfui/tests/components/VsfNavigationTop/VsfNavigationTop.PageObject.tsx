import { BasePage } from '../../utils/BasePage';

export default class VsfNavigationTopBaseObject extends BasePage {
    clickCloseButton() {
        this.closeButtonElement.click();
        return this;
    }

    clickOutside() {
        this.cyRoot.then(el => {
            el[0].style.height = '180px';
        })
        cy.get('body').click('bottom');
        return this;
    }

    closeButtonHasText(text: string) {
        this.closeButtonElement.should('have.text', text);
        return this;
    }

    closeButtonHasIcon(){
        this.closeButtonElement.find('svg[aria-label="close"]');
        return this;
    }

    get closeButtonElement() {
        return this.findTestElement('navigation-top-close-button');
    }
}
