---
layout: AtomLayout
hideBreadcrumbs: true
description: VsfDropdown
---

# Dropdown

::: slot usage

{{ $frontmatter.description }}

## Notes

Dropdown component is built on to of the `useDropdown` hook and accepts all its params.

## Playground

<Generate />

:::

::: slot api
| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
<!-- react -->
| onClose\* | `() => void`                                             |               |                 |
| trigger\* | `ReactNode`                                              |               |                 |
| children | `ReactNode` | | |
| open  | `boolean`                                                |               |                 |
<!-- end react -->
<!-- vue -->
| modelValue  | `boolean`                                                |               |                 |
<!-- end vue -->
| placement | `VsfPopoverPlacement`    | 'bottom'      | Placement of floating element              |
| middleware    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| strategy | `VsfPopoverStrategy`    | 'absolute'      | Positioning strategy (absolute or fixed)         |
<!-- vue -->

## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
| default   | Dropdown content   |
| trigger   | Element that opens up the dropdown   |

## Events

| Event name |            Trigger               |
| ---------- | ----------------------------   |
| update:modelValue     |  emits on clicking outside of dropdown or on escape  |
<!-- end vue -->
:::

::: slot source
<SourceCode>

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDropdown/VsfDropdown.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfDropdown/VsfDropdown.tsx
<!-- end react -->

</SourceCode>
:::
