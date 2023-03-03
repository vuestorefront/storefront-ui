---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the useDisclosure hook.
---

# useDisclosure

::: slot usage

{{ $frontmatter.description }}

## Import

```tsx
import { useDisclosure } from '@storefront-ui/react';
```

## Usage

```tsx
import { VsfButton, useDisclosure } from '@storefront-ui/react';

function Basic() {
  const { isOpen, toggle } = useDisclosure();

  return (
    <>
      <VsfButton onClick={toggle}>Toggle</VsfButton>
      {isOpen && <p>This text shows when isOpen value is true.</p>}
    </>
  );
}
```

:::

::: slot api

## Parameters

| Name         | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| initailState | `boolean` | false         |             |

## Return value

| Name   | Type         | Default value | Description |
| ------ | ------------ | ------------- | ----------- |
| isOpen | `boolean`    |               |             |
| open   | `() => void` |               |             |
| close  | `() => void` |               |             |
| toggle | `() => void` |               |             |

:::

::: slot source

## Source code

<<<../../../packages/sfui/frameworks/react/hooks/useDisclosure/useDisclosure.ts

:::
