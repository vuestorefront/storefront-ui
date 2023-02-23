---
layout: AtomLayout
hideBreadcrumbs: true
description: A Combobox is a kind of select with search option (used for long lists).
---
# Combobox

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| value        | String          | ''            |                                        |
| label        | String          | ''            |                                        |
| size         | VsfInputSizes  | base          | sm, base, lg                           |
| disabled     | Boolean         | false         |                                        |
| invalid      | Boolean         | false         |                                        |
| required     | Boolean         | false         |                                        |
| placeholder  | String          | ''            |                                        |
| requiredText | String          | 'Required'   |                                        |
| helpText     | String          | ''            |                                        |
| errorText    | String          | ''            |                                        |
| loading      | Boolean         | false         |                                        |
<!-- react -->
| open   | Boolean       |               |                                        |
| className    | String          |               |                                        |
| onChange     | Function        |               |                                        |
| onClick     | Function        |               |                                        |
| onClose     | Function        |               |                                        |
| onOpenChange     | Function        |               |                                        |
<!-- end react -->

<!-- vue -->
## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |
<!-- end vue -->

## Accessibility notes

Keyboard users can use `tab` to focus on `input`
Used an `input` element with `type="text"`, for single-line input.
Dropdown content should use `role="option"`.

When Combobox is opened `focus` is trapped within it's dropdown container.

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfCombobox/VsfCombobox.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfCombobox/VsfCombobox.tsx

<!-- end react -->
