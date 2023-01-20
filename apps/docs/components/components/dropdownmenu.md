---
layout: ComponentLayout
hideBreadcrumbs: true
---
# DropdownMenu

<Generate />

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|     `loading`         |     boolean                |  `false`      |                                        |
<!-- react -->
|     `slotLoader`      |     ReactNode              |               |                                        |
|     `children`        |     ReactNode              |               | list of possible values i.e.  VsfListMenuItem, VsfCheckbox, VsfRadioItem etc.       |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | --------------------------------- |
| `default` | list of possible values i.e.  VsfListMenuItem, VsfCheckbox, VsfRadioItem etc. |
| `loader`  | replaces default loader component |
<!-- end vue -->

## Accessibility notes
The component has the `role="menu"`. It can be changed by adding new role attribute if needed in your use case.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDropdownMenu/VsfDropdownMenu.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfDropdownMenu/VsfDropdownMenu.tsx
<!-- end react -->
