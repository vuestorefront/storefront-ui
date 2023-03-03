---
layout: AtomLayout
hideBreadcrumbs: true
description: API reference docs for the useTooltip hook.
---

# useTooltip

::: slot usage

{{ $frontmatter.description }}

## Import

```tsx
import { useTooltip } from '@storefront-ui/react';
```

## Usage

Example of custom tooltip with Transition built on to of the `useTooltip` hook.

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
      <span>{children}</span>
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
| placement | `VsfPopoverPlacement` | 'bottom'      |             |
| offset    | `number`              | 8             |             |

## Return value

| Name            | Type           | Default value | Description |
| --------------- | -------------- | ------------- | ----------- |
| refs            | `RefsObject`   |               |             |
| style           | `StylesObject` |               |             |
| isOpen          | `boolean`      |               |             |
| open            | `() => void`   |               |             |
| close           | `() => void`   |               |             |
| toggle          | `() => void`   |               |             |
| getTriggerProps | `PropsGetters` |               |             |
| getTooltipProps | `PropsGetters` |               |             |
| getArrowProps   | `PropsGetters` |               |             |

:::

::: slot source

## Source code

<<<../../../packages/sfui/frameworks/react/hooks/useTooltip/useTooltip.ts

:::
