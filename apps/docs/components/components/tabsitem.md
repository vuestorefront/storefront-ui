---
layout: AtomLayout
hideBreadcrumbs: true
description: The VsfTabsItem is the VsfButton component which needs to have unique id passed by uid prop and allows to put icon, counter or text content in separate slots.
---
#  TabsItem

{{ $frontmatter.description }}

## Notes

`VsfTabsItem` needs to receive unique id passed by `uid` prop (it can be number, string or symbol).
## Props

| Prop name           | Type                        | Default value | Possible values                        |
|---------------------|-----------------------------|---------------|----------------------------------------|
| uid        | `number`, `string`, symbol      |               |                                        |
| disabled              | `boolean`              | `false`        |    |
<!-- react -->
| children            | main content  of button component    |               |                                        |
| slotPrefix          | content appearing on the left e.g. an icon| |   
| slotSuffix            | content appearing on the left e.g. a counter      |               |                                        |
| className          | `string`  | |                                       |
|  onChange          | `Function`  | |                                       |
<!-- end react -->
<!-- vue -->
|  modelValue          | `string`  | |  uid of an active tab |


## Slots

| Slot name |            Description                                           |
| --------- | ---------------------------------------------------------------- |
| `default` |  slot to place main content of the button                        |
| `prefix` |  slot to place content on the left of the button e.g. an icon     |
| `suffix` |  slot to place content on the right of the button e.g. a counter   |
<!-- end vue -->

## Events

| Event name |            Trigger             |
| ---------- | ----------------------------   |
| `update:modelValue` | emits selected tab uid|


## Accessibility notes
VsfTabs element is given a role of `tablist` and is the wrapper for all `VsfTabsItem` which should have `tab` role. Each active tab gets `aria-selected` attribute set as `true`. If the tabs component have also header element, link it by adding `id` attribute to the element and `aria-labelledby` to the `VsfTabs` component with the same value. 
Similarly, the content associated with the tab should be given a role of `tabpanel` and be indicated by adding `aria-labelledby` with the same value as `aria-controls` attribute of corresponding tab. 

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfTabs/VsfTabsItem.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfTabs/VsfTabsItem.tsx
<!-- end react -->
