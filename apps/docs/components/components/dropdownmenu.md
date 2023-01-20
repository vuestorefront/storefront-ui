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
The component should receive the `role` attribute, but its value depends on usage. So for the `DropdownMenu` in the `Combobox` or `SelectDropdown` components it is set to `listbox`. In such case elements used inside this component should have `role=option` set.
In other cases it can receive:
-  `menu` role and then elements inside should receive `menuitem` or other similar role. 
-  `list` role which can consist of `listitems` or `group` which can group other `listitems` inside.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDropdownMenu/VsfDropdownMenu.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfDropdownMenu/VsfDropdownMenu.tsx
<!-- end react -->
