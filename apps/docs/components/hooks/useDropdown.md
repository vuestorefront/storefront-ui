---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the useDropdown hook.
---

# useDropdown

::: slot usage

{{ $frontmatter.description }}

## Import

```tsx
import { useDropdown } from '@storefront-ui/react';
```

## Usage

```tsx
import * as React from 'react';
import { useDropdown, VsfButton } from '@storefront-ui/react'

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

:::

::: slot api

## Parameters

| Name      | Type                     | Default value | Description                               |
| --------- | ------------------------ | ------------- | ----------------------------------------- |
| isOpen\*  | `boolean`                |               | Recalculate position when isOpen is true. |
| onClose\* | `() => void`             |               |                                           |
| placement | `VsfPopoverPlacement`    | 'bottom'      |                                           |
| offset    | `number`                 | 8             |                                           |
| arrowRef  | `React.Ref<HTMLElement>` |               |                                           |

## Return value

| Name  | Type           | Default value | Description |
| ----- | -------------- | ------------- | ----------- |
| refs  | `RefsObject`   |               |             |
| style | `StylesObject` |               |             |

:::

::: slot source

## Source code

<<<../../../packages/sfui/frameworks/react/hooks/useDropdown/useDropdown.ts

:::
