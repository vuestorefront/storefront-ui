import { mount as vueMount } from "cypress/vue";
import { mount as reactMount } from 'cypress/react18';
import { isReact, isVue } from "./utils";
import { useState, createElement } from 'react';
import type { ReactNode, FunctionComponent } from 'react';
import { isRef, unref, watch } from 'vue';
import type { Ref } from 'vue';

type vueMountOptions = Parameters<typeof vueMount>;
type reactMountOptions = Parameters<typeof reactMount>;
export const mount = (mountOptions: {
  vue?: {
    component: vueMountOptions[0],
  } & vueMountOptions[1],
  react?: reactMountOptions[0] | JSX.Element
}) => {
  // https://docs.cypress.io/guides/component-testing/quickstart-vue
  if (isVue && mountOptions.vue) {
    return (cy.mount as typeof vueMount)(mountOptions.vue.component, mountOptions.vue)
  }
  // https://docs.cypress.io/guides/component-testing/quickstart-react
  if (isReact && mountOptions.react) {
    return (cy.mount as typeof reactMount)(mountOptions.react)
  }
}

/* Wrapper for REACT tests, help to utilize reactive variables and test full lifecycle of state created in parent   component.
  When e.g prop named `open` have callback `onOpenChange` that return altered state, we can use it as
  <Wrapper
    open={modelValue}
    onOpenChange={(e: boolean) => modelValue.value = e}
    component={VsfNavigationTopReact}
  />

  or you can define pair prop - callback if names are different

  <Wrapper
    open={modelValue}
    onChange={(e: boolean) => modelValue.value = e}
    propCallbackPair={{open: 'onChange'}}
    component={VsfNavigationTopReact}
  />
*/
export function Wrapper<T extends Record<string, unknown>>({
  component,
  children,
  propCallbackPair,
  ...attributes
}: {
  [k: string]: unknown;
  component: (props: T) => ReactNode;
  children: JSX.Element | JSX.Element[];
  propCallbackPair?: Record<keyof T, keyof T>;
} & {[k in keyof T]: T[k] | Ref<T[k]>}): JSX.Element {
  let reactiveValuesInternal: Partial<Record<keyof T, unknown>> = {};
  let propCallbackPairInternal = {...propCallbackPair} as Record<keyof T, keyof T>;
  const onlyPropNamesNoCallbacks = Object.keys(attributes).filter(attribute =>
    attribute.substring(0, 2) !== 'on') as (keyof T)[];

  for (const attribute in attributes) {
    if(attribute.substring(0, 2) === 'on'){
      const propNamePair = onlyPropNamesNoCallbacks
        .filter(propName => attribute.toLowerCase().includes(propName as string))[0];
      propCallbackPairInternal[propNamePair] = attribute;
    }
  }

  for (const propName in propCallbackPairInternal) {
    const reactiveProp = attributes[propName] as Ref<unknown>;

    const eventName = propCallbackPairInternal[propName];
    const [get, set] = useState(unref(reactiveProp));

    reactiveValuesInternal[propName] = get;
    reactiveValuesInternal[eventName] = (event) => {
      set(event);
      if(isRef(reactiveProp)) reactiveProp.value = event;
      const isFunction = attributes[eventName as string];
      if(typeof isFunction === 'function') {
        isFunction?.(event);
      }
    }

    if(isRef(reactiveProp)) {
      watch(reactiveProp, newValue => {
        set(newValue);
      });
    }
  }

  return <>{createElement(component as unknown as FunctionComponent<any>, {
    ...attributes,
    ...reactiveValuesInternal,
  }, children as ReactNode)}</>
};
