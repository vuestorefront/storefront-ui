---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the useDropdown hook.
---

# useDropdown

::: slot usage

{{ $frontmatter.description }}

## Usage

<!-- react -->
```tsx
import * as React from 'react';
import { useDropdown, VsfButton } from '@storefront-ui/react';

function Dropdown() {
  const [isOpen, setOpen] = React.useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((isOpen) => !isOpen);

  const { refs, style } = useDropdown({ isOpen, onClose: close });

  return (
    <div ref={refs.setReference} className="w-max">
      <VsfButton onClick={toggle}>Toggle</VsfButton>
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
```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { useTooltip, VsfButton } from '@storefront-ui/vue';

const isOpen = ref(false);

const { referenceRef, floatingRef,, style } = useDropdown({ isOpen, onClose: () => isOpen.value = false });
</script>

<template>
  <div ref="referenceRef" class="w-max">
    <VsfButton @click="isOpen != isOpen">Toggle</VsfButton>
    <ul v-if="isOpen" ref="floatingRef" :style="style" class="absolute p-2 w-max rounded bg-gray-100">
      <li>More</li>
      <li>About</li>
      <li>Settings</li>
    </ul>
  </div>
</template>
```
<!-- end vue -->

:::

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
| placement | `VsfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `VsfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

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
