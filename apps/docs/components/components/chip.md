---
layout: AtomLayout
hideBreadcrumbs: true
description: Chip allow selection of a single possibility from a set of options. They are a good alternative to toggle buttons, radio buttons, and single select menus. When `deletable` prop is set to `false` it can be selected and work as filter. When it's set to true, it disappears when clicked.
---
# Chip
::: slot usage

{{ $frontmatter.description }}

<Generate />

:::

::: slot api

## Props

| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| size      | `string`  | `base`        | `sm`, `base`      |
| label     | `string`  |               |                   |
| disabled  | `boolean` | `false`       |                   |
| deletable | `boolean` | `false`       |                   |
| value     | `string`  | `false`       |                   |
<!-- react -->
| selected  | `boolean` | `false`       |                   |
| slotPrefix| `ReactNode`|              |                   |
| onSelected| `Function` |`(event?: ChangeEvent<HTMLInputElement>) => void`|                         |
<!-- end react -->
<!-- vue -->
| modelValue| `Boolean`  |  `false`     |                   |


## Slots 

| Slot name |            Description            |
|-----------| :-------------------------------: |
| prefix |  Replaces content on the left from label  |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

<!-- end vue -->

:::


## Source code
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfChip/VsfChip.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfChip/VsfChip.tsx
<!-- end react -->