---
layout: ComponentLayout
hideBreadcrumbs: true
description: RadioGroup is a common way to allow users to make a single selection from a list of radios. It provides additional error messages and alignment of the list. It is a wrapper for Radio components.
---
# RadioGroup

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name    | Type                      | Default value   | Possible values                  |
|--------------|---------------------------|-----------------|----------------------------------|
| legend       | `string`                  | `''`            |                                  |
| direction    | `VsfRadioGroupDirection`  | `vertical`      | `vertical`, `horizontal`         |
| required     | `boolean`                 | `false`         |                                  |
| invalid      | `boolean`                 | `false`         |                                  |
| requiredText | `string`                  | `''`            |                                  |
| errorText    | `string`                  | `''`            |                                  |
| helpText     | `string`                  | `''`            |                                  |
<!-- react -->
| className    | `string`                  |                 |                                  |
| children     | `SlotType`                | `base`          | `Element`, `Element[]`, `string` |
<!-- end react -->

## Accessibility notes

- Providing a bigger hit area for your radio buttons - select a radio button by clicking on its associated `label` element, as well as on the radio button itself
- [ARIA - radio role:](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role) The radio role is one of a group of checkable buttons, in a radiogroup, where no more than one of the buttons can be checked at a time.
- A radio element is a checkable input in a group of role elements, of which only one of which can be checked at a time. The radio elements must be grouped together in a [`radiogroup`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) to indicate which ones affect the same value.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfRadio/VsfRadioGroup.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfRadio/VsfRadioGroup.tsx
<!-- end react -->
