---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the useTooltip <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue -->.
---

# useTooltip

::: slot usage

{{ $frontmatter.description }}

## Usage

Example of custom tooltip with Transition built on to of the `useTooltip` <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue -->.

<!-- react -->
```tsx
import * as React from 'react';
import { useTooltip } from '@storefront-ui/react';
import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

interface Props {
  children?: React.ReactNode;
  label?: string;
}

function CustomTooltip(props: Props) {
  const { children, label } = props;
  const { refs, isOpen, getTriggerProps, getTooltipProps, getArrowProps } = useTooltip();

  return (
    <span {...getTriggerProps()}>
      {children}<
      <Transition nodeRef={refs.floating} in={isOpen} timeout={300} unmountOnExit mountOnEnter>
        {(state) => (
          <div
            {...getTooltipProps({
              style: transitionStyles[state],
              className: 'bg-green-800 p-1 rounded text-white w-max transition-opacity duration-300',
            })}
          >
            {label}
            <span {...getArrowProps({ className: 'bg-green-800 w-[8px] h-[8px] rotate-45' })} />
          </div>
        )}
      </Transition>
    </span>
  );
}
```
<!-- end react -->
<!-- vue -->
```vue
<script lang="ts" setup>
import { toRefs } from 'vue';
import { useTooltip } from '@storefront-ui/vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
});

const { label } = toRefs(props);
const { isOpen, triggerProps, tooltipProps, arrowProps } = useTooltip();
</script>

<template>
  <span v-bind="triggerProps">
    <slot />
    <div
      v-if="label && isOpen"
      class="bg-green-800 p-1 rounded text-white w-max transition-opacity duration-300"
      v-bind="tooltipProps"
    >
      {{ label }}
      <span v-bind="arrowProps" class="bg-green-800 w-[8px] h-[8px] rotate-45" />
    </div>
  </span>
</template>
```
<!-- end vue -->

:::

::: slot api

## Parameters

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| arrowSize | `CSSLength`    | '6px'      | Size of arrow in any of CSS length units (px, rem, vw, etc)              |
<!-- vue -->
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
| arrowRef  | `MaybeElementRef<HTMLElement>`  | `undefined`              |                 |
<!-- end vue -->
| placement | `VsfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `VsfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

## Return value

| Name            | Type           | Default value | Description |
| --------------- | -------------- | ------------- | ----------- |
| style           | `StylesObject` |               |  Style objects for floating and arrow elements |
<!-- react -->
| isOpen          | `boolean`      |               |             |
| refs  | `Object`   |               | Element refs setters & getters            |
| getTriggerProps | `PropsGetters` |               |             |
| getTooltipProps | `PropsGetters` |               |             |
| getArrowProps   | `PropsGetters` |               |             |
<!-- end react -->
<!-- vue -->
| isOpen          | `Ref<boolean>`      |               |             |
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
| arrowRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element that will receive arrow styling and positioning  |
| triggerProps | `PropsObject` |               |             |
| tooltipProps | `PropsObject` |               |             |
| arrowProps   | `PropsObject` |               |             |
<!-- end vue -->
| open            | `() => void`   |               |             |
| close           | `() => void`   |               |             |
| toggle          | `() => void`   |               |             |

:::

::: slot source
<SourceCode>

<!-- react -->
<<<../../../packages/sfui/frameworks/react/hooks/useTooltip/useTooltip.ts
<!-- end react -->
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/composables/useTooltip/useTooltip.ts
<!-- end vue -->

</SourceCode>
:::
