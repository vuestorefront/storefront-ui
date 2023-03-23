---
layout: AtomLayout
hideBreadcrumbs: true
---

# Tooltip

:::::: slot usage

`SfTooltip` can be used to provide additional information when an element receives focus or is hovered.

It's built on top of `useTooltip` and accepts all its params.

::: read-more
<!-- react -->
Learn more about `useTooltip` hook in the [Hooks > useTooltip docs](/react/hooks/useTooltip.html).
<!-- end react -->
<!-- vue -->
Learn more about `useTooltip` composable in the [Composables > useTooltip docs](/vue/hooks/useTooltip.html).
<!-- end vue -->
:::

## Accessibility notes

By default, this component sets `role="tooltip"`.


## Playground

<Generate />

::::::

::: slot api
## Props

| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `label`\*   | `string`                                                 |               |                 |
| `showArrow` | `boolean`                                                | `false`       |                 |
| `placement` | `SfPopoverPlacement`                                    |               |                 |
| `arrowSize` | `${number}px` &#124; `${number}em` &#124; `${number}rem` |               |                 |
<!-- react -->
| `children` | `ReactNode` | | |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
| `default`   | Content being described by the tooltip   |
<!-- end vue -->
:::

::: slot source
<SourceCode>

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfTooltip/SfTooltip.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfTooltip/SfTooltip.tsx
<!-- end react -->

</SourceCode>
:::
