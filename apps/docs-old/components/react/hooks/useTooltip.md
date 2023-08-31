---
repoPath: /hooks/useTooltip.md
layout: AtomLayout
hideBreadcrumbs: true
description: A wrapper for usePopover with additional features for creating tooltips.
---

# useTooltip

::: slot usage

`useTooltip` is a wrapper around `usePopover` that adds specific behavior for displaying tooltips. For example, the tooltip will automatically hide/show depending on the hover state of a given element.

## Usage



To implement a tooltip, we can use the `useTooltip` hook to create a custom tooltip component. This hook returns a set of properties that can be used to build a custom tooltip component. For a minimal example, we can implement a tooltip using the following properties:

1. `refs` - An object that contains a `floating` property that should be placed on your tooltip content
2. `isOpen` - A boolean that indicates whether or not the tooltip should be open
3. `getTriggerProps` - A function that returns the props that should be placed on the trigger element (the element that the tooltip will be positioned relative to)
4. `getTooltipProps` - A function that returns the props that should be placed on the tooltip element
5. `getArrowProps` - A function that returns the props that should be placed on the tooltip arrow element

So if we wanted to build a custom tooltip with `Transition`, we could do something like this:
```tsx
import * as React from 'react';
import { useTooltip } from '@storefront-ui/react';
import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

interface Props {
  children?: React.ReactNode;
  label?: string;
}

function CustomTooltip(props: Props) {
  const { children, label } = props;
  const { refs, isOpen, getTriggerProps, getTooltipProps, getArrowProps } = useTooltip();

  return (
    <span {...getTriggerProps()}>
      {children}<
      <Transition nodeRef={refs.floating} in={isOpen} timeout={300} unmountOnExit mountOnEnter>
        {(state) => (
          <div
            {...getTooltipProps({
              style: transitionStyles[state],
              className: 'bg-green-800 p-1 rounded text-white w-max transition-opacity duration-300',
            })}
          >
            {label}
            <span {...getArrowProps({ className: 'bg-green-800 w-[8px] h-[8px] rotate-45' })} />
          </div>
        )}
      </Transition>
    </span>
  );
}
```

:::

::: slot api

## Parameters

| Name      | Type                  | Default value | Description |
| --------- | --------------------- | ------------- | ----------- |
| arrowSize | `CSSLength`    | '6px'      | Size of arrow in any of CSS length units (px, rem, vw, etc)              |
| placement | `SfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `SfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

## Return value

| Name            | Type           | Default value | Description |
| --------------- | -------------- | ------------- | ----------- |
| style           | `StylesObject` |               |  Style objects for floating and arrow elements |
| isOpen          | `boolean`      |               |             |
| refs  | `Object`   |               | Element refs setters & getters            |
| getTriggerProps | `PropsGetters` |               |             |
| getTooltipProps | `PropsGetters` |               |             |
| getArrowProps   | `PropsGetters` |               |             |
| open            | `() => void`   |               |             |
| close           | `() => void`   |               |             |
| toggle          | `() => void`   |               |             |

:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/react/hooks/useTooltip/useTooltip.ts

</SourceCode>
:::
