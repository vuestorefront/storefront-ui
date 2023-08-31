---
repoPath: /hooks/useDisclosure.md
layout: AtomLayout
hideBreadcrumbs: true
description: Controls to manage the visibility of a component
---

# useDisclosure

:::::: slot usage

The `useDisclosure` hook is a utility that gives you controls for a Boolean `isOpen` value. This can be used to control the visibility of components.

## Usage

<SourceCode>

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

</SourceCode>

### With Initial Value

By default, the value of `isOpen` is false. But we can pass an initial value using an option object with an `initialValue`.

<SourceCode>

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

<<<../../../packages/sfui/frameworks/react/hooks/useDisclosure/useDisclosure.ts

</SourceCode>
:::
