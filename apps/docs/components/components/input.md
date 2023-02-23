---
layout: AtomLayout
hideBreadcrumbs: true
description: A input is a single-line text field allows users to enter any combination of letters, numbers, or symbols. Supports the use of prefix and suffix as text or icon.
---
# Input

{{ $frontmatter.description }}

<Generate />

## Notes

Used for forms, for example to enter address details, email, password, credit card numbers.

For search feature use Search component instead of Input.

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| value        | String          | ''            |                                        |
| label        | String          | ''            |                                        |
| size         | VsfInputSize  | base          | sm, base, lg                           |
| disabled     | Boolean         | false         |                                        |
| invalid      | Boolean         | false         |                                        |
| required     | Boolean         | false         |                                        |
| readonly     | Boolean         | undefined     |                                        |
| placeholder  | String          | ''            |                                        |
| requiredText | String          | 'Required'   |                                        |
| helpText     | String          | ''            |                                        |
| errorText    | String          | ''            |                                        |
| logoAriaLabel| String          | ''            |                                        |
| logoLink     | String          | ''            |                                        |
<!-- react -->
| slotPrefix   | ReactNode       |               |                                        |
| slotSuffix   | ReactNode       |               |                                        |
| className    | String          |               |                                        |
| onChange     | Function        |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name     |            Description            |
| ---------     | :-------------------------------: |
|  prefix       |   Custom content for prefix in input       |
|  suffix       |   Custom content for suffix in input       |
<!-- end vue -->

<!-- vue -->

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

<!-- end vue -->

## Accessibility notes

Keyboard users can use `tab` to focus on `input`
Used an `input` element with `type="text"`, for single-line input.

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfInput/VsfInput.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfInput/VsfInput.tsx

<!-- end react -->
