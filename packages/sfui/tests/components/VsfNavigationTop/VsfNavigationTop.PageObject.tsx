import { BasePage } from '../../utils/BasePage';

export default class VsfNavigationTopBaseObject extends BasePage {
    clickCloseButton() {
        this.findTestElement('navigation-top-close-button').click();
        return this;
    }

    clickOutside() {
        this.cyRoot.then(el => {
            el[0].style.height = '180px';
        })
        cy.get('body').click('bottom');
        return this;
    }
}
