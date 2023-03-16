---
layout: AtomLayout
hideBreadcrumbs: true
description: VsfTooltips provide contextual information about an element when that owning element receives focus or is hovered over, but is otherwise not visible on the page.
---

# Tooltip

::: slot usage

{{ $frontmatter.description }}

## Accessibility notes

Tooltip element has role="tooltip".

## Notes

Tooltip component is built on to of the `useTooltip` hook and accepts all its params.

## Playground

<Generate />

:::

::: slot api
| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| label\*   | `string`                                                 |               |                 |
| showArrow | `boolean`                                                | `false`       |                 |
| placement | `VsfPopoverPlacement`                                    |               |                 |
| arrowSize | `${number}px` &#124; `${number}em` &#124; `${number}rem` |               |                 |
<!-- react -->
| children | `ReactNode` | | |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
| default   | Content being described by the tooltip   |
<!-- end vue -->
:::

::: slot source
<SourceCode>

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfTooltip/VsfTooltip.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfTooltip/VsfTooltip.tsx
<!-- end react -->

</SourceCode>
:::
