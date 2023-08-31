---
repoPath: /components/tooltip.md
layout: AtomLayout
hideBreadcrumbs: true
---

# Tooltip

:::::: slot usage

`SfTooltip` can be used to provide additional information when an element receives focus or is hovered.

It's built on top of `useTooltip` and accepts all its params.

::: read-more
Learn more about `useTooltip` composable in the [Composables > useTooltip docs](/vue/hooks/useTooltip.html).
:::

## Examples

### Basic Usage

<Showcase showcase-name="Tooltip/BasicTooltip">

<<<../../preview/nuxt/pages/showcases/Tooltip/BasicTooltip.vue
</Showcase>

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

## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
| `default`   | Content being described by the tooltip   |
:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/vue/components/SfTooltip/SfTooltip.vue

</SourceCode>
:::
