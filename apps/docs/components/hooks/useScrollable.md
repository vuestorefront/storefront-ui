---
layout: AtomLayout
hideBreadcrumbs: true
description: An easy to use function for creating scrollable slider.
---

# useScrollable
::: warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
:::
:::::: slot usage

`useScrollable` gives possibility to create slider scrollable with e.g thumbnails.

With this <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue --> user don't need to worry about handling `previous` or `next` methods which scroll through scrollable.

## Usage

### Base Usage
<!-- react -->

To use `useScrollable`, we have attach `getContainerProps` on main container to identify the element that we want to watch for specific events. Additionally we need to create two buttons and apply `getPrevButtonProps` for button that show previous pages and `getNextButtonProps` for `button` that will show next pages on click.

<SourceCode>

```tsx
import * as React from 'react';
import { useScrollable } from '@storefront-ui/react';

function BasicScrollable(props: Props) {
  const { getContainerProps, state, getNextButtonProps, getPrevButtonProps } = useScrollable();

  return (
    <div className="flex items-center">
      <button {...getPrevButtonProps()}>previous</button>
      <div {...getContainerProps()}>
        {Array.from({ length: itemsLength }, (_, i) => (
          <div
            key={i}
          >
            thumbnail {i + 1}
          </div>
        ))}
      </div>
      <button {...getNextButtonProps()}>next</button>
    </div>
  );
}
```
</SourceCode>

<!-- end react -->
<!-- vue -->

To use `useScrollable`, we have attach `getContainerRef` on main container to identify the element that we want to watch for specific events. Additionally we need to create two buttons and apply `getPrevButtonProps` for button that show previous pages and `getNextButtonProps` for `button` that will show next pages on click.

<SourceCode>

```vue
<script lang="ts" setup>
import { ref } from 'vue';
import { useScrollable } from '@storefront-ui/vue';

const { getContainerRef, state, getNextButtonProps, getPrevButtonProps } = useScrollable()
</script>

<template>
  <div class="flex items-center">
    <button v-bind="getPrevButtonProps">previous</button>
    <div ref="getContainerRef">
      <div
        v-for="(_, index) in Array.from({ length: 20 })"
        :key="index"
      >
        thumbnail {{ index + 1 }}
      </div>
    </div>
    <button v-bind="getNextButtonProps">next</button>
  </div>
</template>
```
</SourceCode>
<!-- end vue -->
::::::

::: slot api

## Parameters

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| options  | `ScrollableOptions` | `{}`              | Object with multiple options  |

## UseScrollable Options       |

| Name            | Type           | Default value | Description |
| --------------- | -------------- | ------------- | ----------- |
| activeIndex           | `number` |               | When specified scroll to given item index |
| reduceMotion           | `boolean` |               | Option for [`scrollTo`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) behavior, when `true` is `auto`, when `false` is `smooth` |
| drag           | `{ sensitivity: number; } | boolean` |               |  Gives possibility to specifiy intensity of dragging experience or disabling it |
| direction           | `SfScrollableDirection` | `horizontal`   | Set orientation of scrollable `vertical` or `horizontal` |
| onDragChange           | `Function` |    | Callback when drag has happens |
| onScroll           | `Function` |   | Callback when any scroll happens |
| onPrev           | `Function` |    | Callback when previous button is clicked |
| onNext           | `Function` |    | Callback when next button is clicked |

## Return value

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
<!-- vue -->
| state  | `Ref<{hasPrev: boolean; hasNext: boolean;isDragged: boolean;}>` | `ref{ hasPrev: false, hasNext: false, isDragged: false }`  | Current state of scrollable  |
| getContainerRef  | `Ref<>` |   | `Ref` to be attached on container  |
| getPrevButtonProps  | `ComputedRef<{onClick, disabled}>` |   | ComputedRef to be binded onto previous button |
| getNextButtonProps  | `ComputedRef<{onClick, disabled}>` |   | ComputedRef to be binded onto next button |
<!-- end vue -->
<!-- react -->
| state  | `{hasPrev: boolean; hasNext: boolean;isDragged: boolean;}` | `{ hasPrev: false, hasNext: false, isDragged: false }`  | Current state of scrollable  |
| getContainerProps  | `Function` |   | Props to be attched on container  |
| getPrevButtonProps  | `Function` |   | Function to be attached onto previous button |
| getNextButtonProps  | `Function` |   | Function to be attached onto next button |
<!-- end react -->

:::

::: slot source
<SourceCode>

<!-- react -->
<<<../../../packages/sfui/frameworks/react/hooks/useScrollable/useScrollable.ts
<!-- end react -->
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/composables/useScrollable/useScrollable.ts
<!-- end vue -->

</SourceCode>
:::
