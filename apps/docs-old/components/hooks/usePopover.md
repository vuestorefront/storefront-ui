---
layout: AtomLayout
hideBreadcrumbs: true
description: Position and control any type of floating element.
---

# usePopover

:::::: slot usage

`usePopover` is a wrapper around the [Floating UI library](<!-- react -->https://floating-ui.com/docs/react<!-- end react --><!-- vue -->https://floating-ui.com/docs/vue<!-- end vue -->). It provides an API for positioning floating elements next to reference elements. This can be useful for creating tooltips, dropdowns, popovers, and other floating elements.

## Usage

Simple Tooltip component example built on top of the `usePopover` <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue -->.


<!-- react -->

For a minimal example, we can implement a floating element using two properties returned by the `usePopover` hook.

1. `refs` - An object that contains a `setReference` and `setFloating` function. These functions should be bound to the element that the floating element will be positioned relative to and the floating element itself, respectively.
2. `style` - An object containing the position styles for your floating element.

By binding these properties to the appropriate elements, we can create any floating element - in this case, we have a Tooltip that displays when the reference element is hovered.

<SourceCode>

```tsx
import * as React from 'react';
import { usePopover } from '@storefront-ui/react';

interface TooltipProps {
  children?: React.ReactNode;
  text?: string;
}

function Tooltip({ children, text }: TooltipProps) {
  const [isOpen, setOpen] = React.useState(false);
  const { refs, style } = usePopover({ isOpen });

  return (
    <span ref={refs.setReference} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {isOpen && (
        <div ref={refs.setFloating} style={style} className="p-2 rounded bg-black text-white">
          {text}
        </div>
      )}
    </span>
  );
}
```
</SourceCode>
<!-- end react -->
<!-- vue -->
For a minimal example, we can implement a floating element using three properties returned by the `usePopover` composable.

1. `referenceRef` - A Vue template ref that should be bound to the element that the floating element will be positioned relative to.
2. `floatingRef` - A Vue template ref that should be bound to the element you want to be floating.
3. `style` - An object containing the position styles for your floating element.

By binding these properties to the appropriate elements, we can create any floating element - in this case, we have a Tooltip that displays when the reference element is hovered.

<SourceCode>

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { usePopover } from '@storefront-ui/vue';

defineProps({
  text: {
    type: String,
    default: '',
  },
});

const isOpen = ref(false);
const { referenceRef, floatingRef, style } = usePopover({ isOpen });
</script>

<template>
  <span ref="referenceRef" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <slot />
    <div
      v-if="isOpen"
      ref="floatingRef"
      class="p-2 rounded bg-black text-white"
      :style="style"
    >
      {{ text }}
    </div>
  </span>
</template>
```
</SourceCode>

<!-- end vue -->

:::tip There are more options!
For a full list of the possible parameters and return values, see the API section.
:::

::::::

::: slot api

## Parameters

| Name      | Type                     | Default value | Description                               |
| --------- | ------------------------ | ------------- | ----------------------------------------- |
<!-- react -->
| isOpen  | `boolean`                |  `false`             | Recalculates position when isOpen is true |
<!-- end react -->
<!-- vue -->
| isOpen  | `MaybeRef<boolean>`                |  `false`             | Recalculates position when isOpen is true |
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
<!-- end vue -->
| placement | `SfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `SfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

## Return value

| Name  | Type           | Default value | Description |
| ----- | -------------- | ------------- | ----------- |
| style | `Object` |               | Styles object for positioning the floating element            |
| middlewareData | `MiddlewareData` | | MiddlewareData coming from @floating-ui |
<!-- react -->
| refs  | `Object`   |               | Element refs setters & getters            |
<!-- end react -->
<!-- vue -->
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
<!-- end vue -->
:::

::: slot source
<SourceCode>

<!-- react -->
<<<../../../packages/sfui/frameworks/react/hooks/usePopover/usePopover.ts
<!-- end react -->
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/composables/usePopover/usePopover.ts
<!-- end vue -->

</SourceCode>
:::
