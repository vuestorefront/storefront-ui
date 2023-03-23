---
layout: AtomLayout
hideBreadcrumbs: true
description: Chip allow selection of a single possibility from a set of options. They are a good alternative to toggle buttons, radio buttons, and single select menus. When `deletable` prop is set to `false` it can be selected and work as filter. When it's set to true, it disappears when clicked.
---
# Chip

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

When using thumbnail without any additional label and/or description, you should specify an `aria-label` on the component.


## Sizes

Chip uses `base` and `sm` sizes that can be set via `size` prop.

<Showcase showcase-name="Chip/ChipSizes">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/ChipSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/ChipSizes.tsx#source
<!-- end react -->

</Showcase>

## Thumbnails

<!-- TODO: Add linking to thumbnail component when ready -->
Anything can be passed via default slot to the chip component. One of many possible use case scenarios is using chip to create a filter selection with thumbnail. User can create custom thumbnails or use `Thumbnail` component.

<Showcase showcase-name="Chip/ChipWithThumbnail">
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/ChipWithThumbnail.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/ChipWithThumbnail.tsx#source
<!-- end react -->
</Showcase>


## Deletable behaviour

Chip can act as a deletable item. It can be achieved by passing `SfIconClose` icon into the slot and a little bit of logic to the component.

<Showcase showcase-name="Chip/Deletable">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/Deletable.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/Deletable.tsx#source
<!-- end react -->

</Showcase>

## List of chips

Example of list rendering with many chips and values.

<Showcase showcase-name="Chip/ListOfChips">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/ListOfChips.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/ListOfChips.tsx#source
<!-- end react -->

</Showcase>

## Rounded chip

Example of a rounded chip with single icon. To achieve equal paddings ratio, prop `square` must be set to `true`.
Please note that `aria-label` should be added for a showcase without text label.

<Showcase showcase-name="Chip/WithoutLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/WithoutLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/WithoutLabel.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate style="height: 380px" />
:::

::: slot api

| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| `size`      | `string`  | `'base'`        | `'sm'`, `'base'`      |
| `square`    | `boolean` | `false`       |                   |
| `inputProps`  | `InputHTMLAttributes`   |        |  `{ disabled: true }`                 |
<!-- react -->
| `onSelected`| `Function` |`(event?: ChangeEvent<HTMLInputElement>) => void`|                         |
| `children`  | `ReactNode`|              |                   |
<!-- end react -->
<!-- vue -->
| `modelValue`| `boolean`  |  `false`     |                   |


## Slots 

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | Replaces content inside chip |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfChip/SfChip.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfChip/SfChip.tsx
<!-- end react -->
</SourceCode>
:::