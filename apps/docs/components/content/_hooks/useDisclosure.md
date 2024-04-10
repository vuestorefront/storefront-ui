# useDisclosure

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

The `useDisclosure` utility gives you controls for a Boolean `isOpen` value. This can be used to control the visibility of components.

## Usage



::react-only
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
::

::vue-only
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


::



### With Initial Value

By default, the value of `isOpen` is false. But we can pass an initial value using an option object with an `initialValue`.



::react-only
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
::
::vue-only
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
::


#tab-2

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

#tab-3


::react-only
<<<../../../../../packages/sfui/frameworks/react/hooks/useDisclosure/useDisclosure.ts
::
::vue-only
<<<../../../../../packages/sfui/frameworks/vue/composables/useDisclosure/useDisclosure.ts
::


::
