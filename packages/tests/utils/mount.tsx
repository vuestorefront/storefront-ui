import type { CyMountOptions } from 'cypress/vue';
import { mount as vueMount } from 'cypress/vue';
import { mount as reactMount } from 'cypress/react18';
import { useState, createElement } from 'react';
import type { ReactNode, FunctionComponent } from 'react';
import { isRef, unref, watch, reactive } from 'vue';
import type { Ref } from 'vue';
// import vue
import * as vueComponents from '@storefront-ui/vue';
// end import vue
// import react
import * as reactComponents from '@storefront-ui/react';
// end import react
import { isReact, isVue } from './utils';

type vueMountOptions = Parameters<typeof vueMount>;
type reactMountOptions = Parameters<typeof reactMount>;
export const mount = (mountOptions: {
  vue?: {
    component: vueMountOptions[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } & CyMountOptions<any, any>;
  react?: reactMountOptions[0] | JSX.Element;
}) => {
  // https://docs.cypress.io/guides/component-testing/quickstart-vue
  if (isVue && mountOptions.vue) {
    const wrapperComponent = (cy as unknown as { mount: typeof vueMount }).mount(mountOptions.vue.component, {
      ...mountOptions.vue,
      ...(mountOptions.vue.props && { props: reactive(mountOptions.vue.props || {}) }),
    });
    wrapperComponent.then(({ wrapper }) => {
      Object.entries(mountOptions.vue?.props || {}).forEach(([propName, propValue]) => {
        if (!isRef(propValue)) return;
        watch(
          propValue,
          (propValue) => {
            wrapper.setProps({ [propName]: propValue });
          },
          { immediate: true },
        );
      });
    });
    return wrapperComponent;
  }
  // https://docs.cypress.io/guides/component-testing/quickstart-react
  if (isReact && mountOptions.react) {
    return (cy as unknown as { mount: typeof reactMount }).mount(mountOptions.react as ReactNode);
  }
};

/* Wrapper for REACT tests, help to utilize reactive variables and test full lifecycle of state created in parent   component.
  When e.g prop named `open` have callback `onOpenChange` that return altered state, we can use it as
  <Wrapper
    open={modelValue}
    onOpenChange={(e: boolean) => modelValue.value = e}
    component={SfNavigationTopReact}
  />

  or you can define pair prop - callback if names are different

  <Wrapper
    open={modelValue}
    onChange={(e: boolean) => modelValue.value = e}
    propCallbackPair={{open: 'onChange'}}
    component={SfNavigationTopReact}
  />
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Wrapper<Props extends Record<string, any>>({
  component,
  children,
  propCallbackPair,
  ...attributes
}: {
  component: (props: Props) => JSX.Element;
  propCallbackPair?: Partial<Record<keyof Props, keyof Props>>;
} & { [key in keyof Props]: Props[key] | Ref<Props[key]> }): JSX.Element {
  const reactiveValuesInternal: Partial<Record<keyof Props, unknown>> = {};
  const propCallbackPairInternal = { ...propCallbackPair };

  const onlyPropNamesNoCallbacks = Object.keys(attributes).filter(
    (attribute) => !attribute.startsWith('on'),
  ) as (keyof Props)[];

  // Find dynamically all pairs prop(`open`)/callback(`onOpenSomething`)
  for (const attribute in attributes) {
    if (attribute.startsWith('on')) {
      const propNamePair = onlyPropNamesNoCallbacks.filter((propName) =>
        attribute.toLowerCase().includes(propName as string),
      )[0];
      if (propNamePair) propCallbackPairInternal[propNamePair] = attribute;
    } else {
      if (!(attribute in propCallbackPairInternal) && isRef(attributes[attribute])) {
        propCallbackPairInternal[attribute as keyof Props] = 'fake';
      }
    }
  }

  for (const propName in propCallbackPairInternal) {
    const reactiveProp = attributes[propName as unknown as keyof typeof attributes];

    const eventName = propCallbackPairInternal[propName];
    const [get, set] = useState(unref(reactiveProp));

    reactiveValuesInternal[propName] = get;
    if (eventName !== 'fake') {
      reactiveValuesInternal[eventName] = (event) => {
        set(event);
        if (isRef(reactiveProp)) reactiveProp.value = event;
        const maybeFunction = attributes[eventName as string];
        if (typeof maybeFunction === 'function') {
          maybeFunction?.(event);
        }
      };
    }

    if (isRef(reactiveProp)) {
      watch(reactiveProp, () => {
        set(reactiveProp.value);
      });
    }
  }

  const internalAttributes = { ...attributes };
  for (const attribute in internalAttributes) {
    if (reactiveValuesInternal.hasOwnProperty(attribute)) {
      // remove reactive vue values from attributes and leave onlt those that are created from `useState`
      delete internalAttributes[attribute];
    }
  }

  return (
    <>
      {createElement(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component as unknown as FunctionComponent<any>,
        {
          ...internalAttributes,
          ...reactiveValuesInternal,
        },
        children as ReactNode,
      )}
    </>
  );
}

export const useComponent = (componentName: string) => {
  return {
    vue: vueComponents[componentName],
    react: reactComponents[componentName],
  };
};
