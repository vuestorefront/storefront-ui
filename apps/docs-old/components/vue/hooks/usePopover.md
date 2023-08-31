---
repoPath: /hooks/usePopover.md
layout: AtomLayout
hideBreadcrumbs: true
description: Position and control any type of floating element.
---

# usePopover

:::::: slot usage

`usePopover` is a wrapper around the [Floating UI library](https://floating-ui.com/docs/vue). It provides an API for positioning floating elements next to reference elements. This can be useful for creating tooltips, dropdowns, popovers, and other floating elements.

## Usage

Simple Tooltip component example built on top of the `usePopover` composable.


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


:::tip There are more options!
For a full list of the possible parameters and return values, see the API section.
:::

::::::

::: slot api

## Parameters

| Name      | Type                     | Default value | Description                               |
| --------- | ------------------------ | ------------- | ----------------------------------------- |
| isOpen  | `MaybeRef<boolean>`                |  `false`             | Recalculates position when isOpen is true |
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
| placement | `SfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `SfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

## Return value

| Name  | Type           | Default value | Description |
| ----- | -------------- | ------------- | ----------- |
| style | `Object` |               | Styles object for positioning the floating element            |
| middlewareData | `MiddlewareData` | | MiddlewareData coming from @floating-ui |
| referenceRef  | `MaybeElementRef<Element | VirtualElement>` | `undefined`              | Reference element based on which floating element will be positioned  |
| floatingRef  | `MaybeElementRef<HTMLElement>` | `undefined`              | Element to float next to the reference element  |
:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/vue/composables/usePopover/usePopover.ts

</SourceCode>
:::
