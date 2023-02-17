---
layout: ComponentLayout
hideBreadcrumbs: true
description: ListItemFilterCheckbox component is a Checkbox component adapted to appear in lists.
---

# ListItemFilterCheckbox component

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | string                   | ''            |                                        |
| name         | string                   | ''            |                                        |
| label        | string                   | ''            |                                        |
| secondaryText| string                   | ''            |                                        |
| counter      | number                   | null          |                                        |
| variant      | VsfListItemCheckboxVariant | left          |   left, right                          |
| size         | VsfListItemCheckboxSize    | base          |   sm,  base, lg                        |
| disabled     | boolean                  | false         |                                        |
| truncate     | boolean                  | false         |                                        |
<!-- vue -->
| modelValue   | boolean | string[]       | undefined     |                                        |
<!-- end vue -->
<!-- react -->
| className    | string                   |               |                                        |
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
<<<../../../packages/sfui/frameworks/vue/components/VsfListItemFilterCheckbox/VsfListItemFilterCheckbox.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfListItemFilterCheckbox/VsfListItemFilterCheckbox.tsx
<!-- end react -->
