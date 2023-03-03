---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the usePopover hook.
---

# usePopover

::: slot usage

{{ $frontmatter.description }}

## Import

```tsx
import { usePopover } from '@storefront-ui/react';
```

## Usage

Simple Tooltip component example built on top of the `usePopover` hook.

```tsx
import * as React from 'react';
import { usePopover } from '@storefront-ui/react';

interface TooltipProps {
  children?: React.ReactNode;
  text?: string;
}

function Tooltip({ children, text }: TooltipProps) {
  const [isOpen, setOpen] = React.useState(false);
  const arrowRef = React.useRef(null);
  const { refs, style } = usePopover({ isOpen, arrowRef });

  return (
    <span ref={refs.setReference} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {isOpen && (
        <div ref={refs.setFloating} style={style.floating} className="p-2 rounded bg-black text-white">
          {text}
          <div ref={arrowRef} style={style.arrow} className="bg-black h-4 w-4 rotate-45" />
        </div>
      )}
    </span>
  );
}
```

:::

::: slot api

## Parameters

| Name      | Type                     | Default value | Description                               |
| --------- | ------------------------ | ------------- | ----------------------------------------- |
| isOpen\*  | `boolean`                |               | Recalculate position when isOpen is true. |
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

<<<../../../packages/sfui/frameworks/react/hooks/usePopover/usePopover.ts

:::
