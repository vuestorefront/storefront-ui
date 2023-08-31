---
layout: AtomLayout
hideBreadcrumbs: true
description: Controls to manage the visibility of a component
---

# useDisclosure

:::::: slot usage

The `useDisclosure` <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue --> is a utility that gives you controls for a Boolean `isOpen` value. This can be used to control the visibility of components.

## Usage

<SourceCode>

<!-- react -->
```tsx
import { SfButton, useDisclosure } from '@storefront-ui/react';

function Basic() {
  const { isOpen, toggle, open, close } = useDisclosure();

  return (
    <>
      <SfButton onClick={open}>Open</SfButton>
      <SfButton onClick={close}>Close</SfButton>
      <SfButton onClick={toggle}>Toggle</SfButton>
      {isOpen && <p>This text shows when isOpen value is true.</p>}
    </>
  );
}
```
<!-- end react -->
<!-- vue -->
```vue
<script lang="ts" setup>
import { SfButton, useDisclosure } from '@storefront-ui/vue';

const { isOpen, toggle, open, close } = useDisclosure();
</script>

<template>
  <SfButton @click="open">Open</SfButton>
  <SfButton @click="close">Close</SfButton>
  <SfButton @click="toggle()">Toggle</SfButton>
  <p v-if="isOpen">This text shows when isOpen value is true.</p>
</template>
```

::: warning Usage with events
When using `toggle` with an event listener like `@click`, you need to wrap it in a function. Otherwise, the event will be passed as the first argument to `toggle` and toggle might not work as expected.
:::
<!-- end vue -->

</SourceCode>

### With Initial Value

By default, the value of `isOpen` is false. But we can pass an initial value using an option object with an `initialValue`.

<SourceCode>

<!-- react -->
```tsx
import { SfButton, useDisclosure } from '@storefront-ui/react';

function OpenByDefault() {
  const { isOpen, toggle } = useDisclosure({ 
    initialValue: true
  });

  return (
    <>
      <SfButton onClick={toggle}>Toggle</SfButton>
      {isOpen && <p>This will be open by default!</p>}
    </>
  );
}
```
<!-- end react -->
<!-- vue -->
```vue
<script lang="ts" setup>
import { SfButton, useDisclosure } from '@storefront-ui/vue';

const { isOpen, toggle } = useDisclosure({ 
  initialValue: true
});
</script>

<template>
  <SfButton @click="toggle()">Toggle</SfButton>
  <p v-if="isOpen">This will be open by default!</p>
</template>
```
<!-- end vue -->

</SourceCode>

::::::

::: slot api

## Parameters

| Name         | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| initialValue | `boolean` | false         |             |

## Return value

| Name   | Type         | Default value | Description |
| ------ | ------------ | ------------- | ----------- |
| isOpen | `boolean`    |               |             |
| open   | `() => void` |               |             |
| close  | `() => void` |               |             |
| toggle | `() => void` |               |             |

:::

::: slot source
<SourceCode>

<!-- react -->
<<<../../../packages/sfui/frameworks/react/hooks/useDisclosure/useDisclosure.ts
<!-- end react -->
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/composables/useDisclosure/useDisclosure.ts
<!-- end vue -->

</SourceCode>
:::
