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
Learn more about `useTooltip` hook in the [Hooks > useTooltip docs](/react/hooks/useTooltip.html).
:::

## Examples

### Basic Usage

<Showcase showcase-name="Tooltip/BasicTooltip">

<<<../../preview/next/pages/showcases/Tooltip/BasicTooltip.tsx#source
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
| `children` | `ReactNode` | | |

:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/react/components/SfTooltip/SfTooltip.tsx

</SourceCode>
:::
