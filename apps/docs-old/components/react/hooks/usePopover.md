---
repoPath: /hooks/usePopover.md
layout: AtomLayout
hideBreadcrumbs: true
description: Position and control any type of floating element.
---

# usePopover

:::::: slot usage

`usePopover` is a wrapper around the [Floating UI library](https://floating-ui.com/docs/react). It provides an API for positioning floating elements next to reference elements. This can be useful for creating tooltips, dropdowns, popovers, and other floating elements.

## Usage

Simple Tooltip component example built on top of the `usePopover` hook.



For a minimal example, we can implement a floating element using two properties returned by the `usePopover` hook.

1. `refs` - An object that contains a `setReference` and `setFloating` function. These functions should be bound to the element that the floating element will be positioned relative to and the floating element itself, respectively.
2. `style` - An object containing the position styles for your floating element.

By binding these properties to the appropriate elements, we can create any floating element - in this case, we have a Tooltip that displays when the reference element is hovered.

<SourceCode>

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
</SourceCode>

:::tip There are more options!
For a full list of the possible parameters and return values, see the API section.
:::

::::::

::: slot api

## Parameters

| Name      | Type                     | Default value | Description                               |
| --------- | ------------------------ | ------------- | ----------------------------------------- |
| isOpen  | `boolean`                |  `false`             | Recalculates position when isOpen is true |
| placement | `SfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `SfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

## Return value

| Name  | Type           | Default value | Description |
| ----- | -------------- | ------------- | ----------- |
| style | `Object` |               | Styles object for positioning the floating element            |
| middlewareData | `MiddlewareData` | | MiddlewareData coming from @floating-ui |
| refs  | `Object`   |               | Element refs setters & getters            |
:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/react/hooks/usePopover/usePopover.ts

</SourceCode>
:::
