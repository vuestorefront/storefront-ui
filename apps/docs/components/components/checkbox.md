---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Checkbox

A checkbox is an input that has three possible values: true, false, or indeterminate. When an indeterminate value is not used, these are effectively boolean checkboxes.

Used especially for forms or expressing consents.

For filtering use [ListItemFilterCheckbox]() component instead of Checkbox.

<Generate />

## Props
<!-- vue -->


| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | String                   | ''            |                                        |
| label        | String                   | ''            |                                        |
| helpText     | String                   | ''            |                                        |
| modelValue   | Boolean | string[]       | undefined     |                                        |
| errorText    | String                   | ''            |                                        |
| requiredText | String                   | ''            |                                        |
| alignment    | VsfCheckboxAlignment    | leading       |   leading,  trailing                   |
| indeterminate| Boolean                  | false         |                                        |
| invalid      | Boolean                  | false         |                                        |
| disabled     | Boolean                  | false         |                                        |
| role         | String                   | ''            |                                        |
| required     | Boolean                  | false         |                                        |

<!-- end vue -->

<!-- react -->

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | String                   | ''            |                                        |
| label        | String                   | ''            |                                        |
| helpText     | String                   | ''            |                                        |
| checked      | Boolean                  | false         |                                        |
| errorText    | String                   | ''            |                                        |
| requiredText | String                   | ''            |                                        |
| className    | String                   |               |                                        |
| alignment    | VsfCheckboxAlignment    | leading       |   leading,  trailing                   |
| indeterminate| Boolean                  | false         |                                        |
| invalid      | Boolean                  | false         |                                        |
| disabled     | Boolean                  | false         |                                        |
| required     | Boolean                  | false         |                                        |
| role         | String                   | ''            |                                        |
| onChange     | Function                 |               |                                        |


<!-- end react -->

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

## Accessibility notes

Pressing the Space key triggers checkbox

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfCheckbox/VsfCheckbox.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfCheckbox/VsfCheckbox.tsx

<!-- end react -->
