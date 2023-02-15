---
layout: ComponentLayout
hideBreadcrumbs: true
description: ListItemFilterChip component is a Chip component adapted to appear in lists.
---

# ListItemFilterChip component

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | string                   | ''            |                                        |
| color        | string                   | ''            |                                        |
| label        | string                   | ''            |                                        |
| secondaryText| string                   | ''            |                                        |
| counter      | number                   | null          |                                        |
| variant      | VsfListItemChipVariant   | left          |   left, right                          |
| size         | VsfListItemChipSize      | base          |   sm,  base, lg                        |
| disabled     | boolean                  | false         |                                        |
<!-- vue -->
| modelValue   | boolean | string[]       | undefined     |                                        |
<!-- end vue -->
<!-- react -->
| className    | string                   |               |                                        |
| defaultValue | boolean                  | false         |                                        |
| onChange     | Function                 |               |                                        |

<!-- end react -->

<!-- vue -->

## Slots

| Slot name       |            Description            |
| --------------  | -------------------------------   |
| default         |    place custom content           |
| secondaryText   |    change default secondaryText   |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfListItemFilterChip/VsfListItemFilterChip.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfListItemFilterChip/VsfListItemFilterChip.tsx
<!-- end react -->
