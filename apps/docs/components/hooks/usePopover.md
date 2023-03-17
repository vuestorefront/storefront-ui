---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the usePopover <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue -->.
---

# usePopover

::: slot usage

{{ $frontmatter.description }}

## Usage

Simple Tooltip component example built on top of the `usePopover` <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue -->.

<SourceCode>

<!-- react -->
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
<!-- end react -->
<!-- vue -->
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
<!-- end vue -->

</SourceCode>

:::

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
| placement | `VsfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `VsfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

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
