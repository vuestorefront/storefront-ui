---
repoPath: /hooks/useDropdown.md
layout: AtomLayout
hideBreadcrumbs: true
description: A wrapper for usePopover with additional features for creating dropdown menus.
---

# useDropdown

:::::: slot usage

`useDropdown` allows you to position an element relative to another element. It is a wrapper for `usePopover` that sets default styles for Dropdown menus and adds additional close functionality like closing the menu when the someone clicks outside of the dropdown or when someone presses `Esc`.

## Usage

For a minimal example, we can implement a floating element using two properties returned by the `useDropdown` hook.

1. `refs` - An object that contains a `setReference` and `setFloating` function. These functions should be bound to the element that the floating element will be positioned relative to and the floating element itself, respectively.
2. `style` - An object containing the position styles for your floating element.

By binding these properties to the appropriate elements, we can create a dropdown menu that opens when a button is clicked.

```tsx
import * as React from 'react';
import { useDropdown, SfButton } from '@storefront-ui/react';

function Dropdown() {
  const [isOpen, setOpen] = React.useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((isOpen) => !isOpen);

  const { refs, style } = useDropdown({ isOpen, onClose: close });

  return (
    <div ref={refs.setReference} className="w-max">
      <SfButton onClick={toggle}>Toggle</SfButton>
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


:::tip There are more options!
For a full list of the possible parameters and return values, see the API section.
:::

::::::

::: slot api

## Parameters

| Name      | Type                     | Default value | Description                               |
| --------- | ------------------------ | ------------- | ----------------------------------------- |
| onClose\* | `() => void`             |               |                                           |
| onCloseDeps | `string[]`             |               | Dependency array for `useMemo` for `onClose` function |
| isOpen  | `boolean`                |  `false`             | Recalculates position when isOpen is true |
| placement | `SfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `SfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)              |

## Return value

| Name  | Type           | Default value | Description |
| ----- | -------------- | ------------- | ----------- |
| style | `Object` |               | Styles object for positioning the floating element            |
| refs  | `Object`   |               | Element refs setters & getters            |
:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/react/hooks/useDropdown/useDropdown.ts

</SourceCode>
:::
