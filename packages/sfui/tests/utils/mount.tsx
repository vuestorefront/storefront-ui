import { mount as vueMount } from "cypress/vue";
import { mount as reactMount } from 'cypress/react18';
import { isReact, isVue } from "./utils";

type vueMountOptions = Parameters<typeof vueMount>;
type reactMountOptions = Parameters<typeof reactMount>;
export const mount = (mountOptions: {
    vue?: {
        component: vueMountOptions[0],
    } & vueMountOptions[1],
    react?: reactMountOptions[0]
}) => {
    // https://docs.cypress.io/guides/component-testing/quickstart-vue
    if(isVue && mountOptions.vue){
        return (cy.mount as typeof vueMount)(mountOptions.vue.component, mountOptions.vue)
    }
    // https://docs.cypress.io/guides/component-testing/quickstart-react
    if(isReact && mountOptions.react){
        return (cy.mount as typeof reactMount)(mountOptions.react)
    }
}
