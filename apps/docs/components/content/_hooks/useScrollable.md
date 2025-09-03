
# useScrollable

::warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
::

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`useScrollable` gives possibility to create slider scrollable with e.g thumbnails.

With `useScrollable`, you don't need to worry about handling `previous` or `next` methods which scroll through scrollable.

## Usage

### Base Usage
::react-only

To use `useScrollable` attach `containerRef` to the main container to identify the element that will watch for specific events. Additionally, create two buttons for showing next nad previous elements and apply `getPrevButtonProps` and `getNextButtonProps` to each button accordingly.



```tsx
import * as React from 'react';
import { useScrollable } from '@storefront-ui/react';

function BasicScrollable(props: Props) {
  const { containerRef, state, getNextButtonProps, getPrevButtonProps } = useScrollable();

  return (
    <div className="flex items-center">
      <button {...getPrevButtonProps()}>previous</button>
      <div ref={containerRef}>
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


::
::vue-only

To use `useScrollable` attach `containerRef` to the main container to identify the element that will watch for specific events. Additionally, create two buttons for showing next nad previous elements and apply `getPrevButtonProps` and `getNextButtonProps` to each button accordingly.



```vue
<script lang="ts" setup>
import { useScrollable } from '@storefront-ui/vue';

const { containerRef, state, getNextButtonProps, getPrevButtonProps } = useScrollable()
</script>

<template>
  <div class="flex items-center">
    <button v-bind="getPrevButtonProps">previous</button>
    <div ref="containerRef">
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

::

### Controlled showing next and previous elements
::react-only

`useScrollable exposes imperative methods for showing elements - `showNext` and `showPrev`. To make them work, user needs to bind these functions as `onClick` handler.



```tsx
import * as React from 'react';
import { useScrollable } from '@storefront-ui/react';

function BasicScrollable(props: Props) {
  const { containerRef, state, showNext, showPrev } = useScrollable();

  return (
    <div className="flex items-center">
      <button onClick={showPrev()} disabled={!state.hasPrev}>previous</button>
      <div ref={containerRef}>
        {Array.from({ length: itemsLength }, (_, i) => (
          <div
            key={i}
          >
            thumbnail {i + 1}
          </div>
        ))}
      </div>
      <button onClick={showNext()} disabled={!state.hasNext}>next</button>
    </div>
  );
}
```


::
::vue-only

`useScrollable` exposes imperative methods for showing elements - `showNext` and `showPrev`. To make them work, user needs to bind these functions as click event. 



```vue
<script lang="ts" setup>
import { useScrollable } from '@storefront-ui/vue';

const { containerRef, state, showNext, showPrev } = useScrollable()
</script>

<template>
  <div class="flex items-center">
    <button @click="showPrev" :disabled="!state.hasPrev">previous</button>
    <div ref="containerRef">
      <div
        v-for="(_, index) in Array.from({ length: 20 })"
        :key="index"
      >
        thumbnail {{ index + 1 }}
      </div>
    </div>
    <button @click="showNext" :disabled="!state.hasNext">next</button>
  </div>
</template>
```

::

#tab-2

## Parameters

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| options  | `ScrollableOptions` | `{}`              | Object with multiple options  |

## UseScrollable Options       |

| Name            | Type           | Default value | Description |
| --------------- | -------------- | ------------- | ----------- |
| activeIndex           | `number` |               | When specified scroll to given item index |
| reduceMotion           | `boolean` |               | Option for [`scrollTo`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) behavior, when `true` is `auto`, when `false` is `smooth` |
| drag           | `{ sensitivity: number; } | `boolean` |               |  Gives possibility to specifiy intensity of dragging experience or disabling it |
| direction           | `SfScrollableDirection` | `horizontal`   | Set orientation of scrollable `vertical` or `horizontal` |
| onDragStart           | `(data: SfScrollableOnDragStartData) => void` |    | Callback when drag starts |
| onDragEnd           | `(data: SfScrollableOnDragStartData) => void` |    | Callback when drag ends |
| onScroll           | `(data: SfScrollableOnScrollData) => void` |   | Callback when any scroll happens |
| onPrev           | `(data: SfScrollableOnPrevData) => void` |    | Callback when previous button is clicked |
| onNext           | `(data: SfScrollableOnNextData) => void` |    | Callback when next button is clicked |

## Return value


::vue-only
| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| state  | `Ref<{hasPrev: boolean; hasNext: boolean;isDragged: boolean;}>` | `ref{ hasPrev: false, hasNext: false, isDragged: false }`  | Current state of scrollable  |
| containerRef  | `Ref<>` |   | `Ref` to be attached on container  |
| showNext  | `() => void)` |   | Method used to show next items in the container  |
| showPrev  | `() => void` |   | Method used to show previous items in the container  |
| getPrevButtonProps  | `ComputedRef<{onClick, disabled}>` |   | ComputedRef to be binded onto previous button |
| getNextButtonProps  | `ComputedRef<{onClick, disabled}>` |   | ComputedRef to be binded onto next button |
::

::react-only
| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| state  | `{hasPrev: boolean; hasNext: boolean;isDragged: boolean;}` | `{ hasPrev: false, hasNext: false, isDragged: false }`  | Current state of scrollable  |
| containerRef  | `Ref<>` |   | `Ref` to be attached on container  |
| showNext  | `() => void` |   | Method used to show next items in the container  |
| showPrev  | `() => void` |   | Method used to show previous items in the container  |
| getPrevButtonProps  | `Function` |   | Function to be attached onto previous button |
| getNextButtonProps  | `Function` |   | Function to be attached onto next button |
::

#tab-3

::react-only
<<<../../../../../packages/sfui/frameworks/react/hooks/useScrollable/useScrollable.ts
::
::vue-only
<<<../../../../../packages/sfui/frameworks/vue/composables/useScrollable/useScrollable.ts
::


::
