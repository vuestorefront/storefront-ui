---
layout: AtomLayout
hideBreadcrumbs: true
description: Input components adapted to appear in lists.
---

# ListItemFilterSwitch component

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | string                   | ''            |                                        |
| name         | string                   | ''            |                                        |
| label        | string                   | ''            |                                        |
| secondaryText| string                   | ''            |                                        |
| counter      | string                   | ''            |                                        |
| variant      | VsfListItemSwitchVariant | left          |   left, right                          |
| size         | VsfListItemSwitchSize    | base          |   sm,  base, lg                        |
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
<<<../../../packages/sfui/frameworks/vue/components/VsfListItemFilterSwitch/VsfListItemFilterSwitch.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfListItemFilterSwitch/VsfListItemFilterSwitch.tsx
<!-- end react -->
