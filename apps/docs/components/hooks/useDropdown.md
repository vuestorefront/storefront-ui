---
layout: AtomLayout
hideBreadcrumbs: true
description: A wrapper for usePopover with additional features for creating dropdown menus.
---

# useDropdown

:::::: slot usage

`useDropdown` allows you to position an element relative to another element. It is a wrapper for `usePopover` that sets default styles for Dropdown menus and adds additional close functionality like closing the menu when the someone clicks outside of the dropdown or when someone presses `Esc`.

## Usage

For a minimal example, we can implement a floating element using two properties returned by the `useDropdown` hook.

1. `refs` - An object that contains a `setReference` and `setFloating` function. These functions should be bound to the element that the floating element will be positioned relative to and the floating element itself, respectively.
2. `style` - An object containing the position styles for your floating element.

By binding these properties to the appropriate elements, we can create a dropdown menu that opens when a button is clicked.

<!-- react -->
```tsx
import * as React from 'react';
import { useDropdown, SfButton } from '@storefront-ui/react';

function Dropdown() {
  const [isOpen, setOpen] = React.useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((isOpen) => !isOpen);

  const { refs, style } = useDropdown({ isOpen, onClose: close });

  return (
    <div ref={refs.setReference} className="w-max">
      <SfButton onClick={toggle}>Toggle</SfButton>
      {isOpen && (
        <ul ref={refs.setFloating} style={style.floating} className="absolute p-2 w-max rounded bg-gray-100">
          <li>More</li>
          <li>About</li>
          <li>Settings</li>
        </ul>
      )}
    </div>
  );
}
```
<!-- end react -->

<!-- vue -->
For a minimal example, we can implement a floating element using three properties returned by the `useDropdown` composable.

1. `referenceRef` - A Vue template ref that should be bound to the element that the floating element will be positioned relative to.
2. `floatingRef` - A Vue template ref that should be bound to the element you want to be floating.
3. `style` - An object containing the position styles for your floating element.

By binding these properties to the appropriate elements, we can create a dropdown menu that opens when a button is clicked.

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { useDropdown, SfButton } from '@storefront-ui/vue';

const isOpen = ref(false);

const { referenceRef, floatingRef, style } = useDropdown({ isOpen, onClose: () => isOpen.value = false });
</script>

<template>
  <div ref="referenceRef" class="w-max">
    <SfButton @click="isOpen = !isOpen">Toggle</SfButton>
    <ul v-if="isOpen" ref="floatingRef" :style="style" class="absolute p-2 w-max rounded bg-gray-100">
      <li>More</li>
      <li>About</li>
      <li>Settings</li>
    </ul>
  </div>
</template>
```
<!-- end vue -->

:::tip There are more options!
For a full list of the possible parameters and return values, see the API section.
:::

::::::

::: slot api

## Parameters

| Name      | Type                     | Default value | Description                               |
| --------- | ------------------------ | ------------- | ----------------------------------------- |
| onClose\* | `() => void`             |               |                                           |
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
<<<../../../packages/sfui/frameworks/react/hooks/useDropdown/useDropdown.ts
<!-- end react -->
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/composables/useDropdown/useDropdown.ts
<!-- end vue -->

</SourceCode>
:::
