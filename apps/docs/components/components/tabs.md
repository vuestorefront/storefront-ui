#  Tabs
The tabs consist of two separate components `VsfTabs` and `VsfTabsItem`. The first one is the wrapper for the list of tabs which also includes `VsfSlider` component allowing to scroll when window is to small for all tabs. The second one is the `VsfButton` component which allows to put icon, counter or text content in separate slots and changes the displayed content. `VsfTabsItem` needs to receive unique id passed by `uid` prop (it can be number, string or symbol).

<Generate />

## Props

| Prop name           | Type                        | Default value | Possible values                        |
|---------------------|-----------------------------|---------------|----------------------------------------|
<!-- vue -->
| `modelValue`        | number, string, symbol      |               |                                        |
<!-- end vue -->
| `size`              | VsfButtonSize              | `base`        | `sm`, `base`, `lg`                     |
<!-- react -->
| `active`            | number, string, symbol      |               |                                        |
| `onChange`          | `(uid: number | string | symbol) => void` | |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description          |
| --------- | ------------------------------- |
| `default` |  slot to place all tabs         |

## Events

| Event name |            Trigger             |
| ---------- | ----------------------------   |
| `update:modelValue` | emits active tab uid  |
<!-- end vue -->
## Accessibility notes
VsfTabs element is given a role of `tablist` and is the wrapper for all `VsfTabsItem` which should have `tab` role. Each active tab gets `aria-selected` attribute set as `true`. If the tabs component have also header element, link it by adding `id` attribute to the element and `aria-labelledby` to the `VsfTabs` component with the same value.
Similarly, the content associated with the tab should be given a role of `tabpanel` and be indicated by adding `aria-labelledby` with the same value as `aria-controls` attribute of corresponding tab.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfTabs/VsfTabs.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfTabs/VsfTabs.tsx
<!-- end react -->
