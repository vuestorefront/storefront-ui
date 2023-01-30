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

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |

<!-- vue -->
| modelValue   | Boolean | string[]       | undefined     |                                        |
<!-- end vue -->
<!-- react -->
| checked      | Boolean                  | false         |                                        |
| className    | String                   |               |                                        |
| onChange     | Function                 |               |                                        |
<!-- end react -->
| value        | String                   | ''            |                                        |
| label        | String                   | ''            |                                        |
| helpText     | String                   | ''            |                                        |
| errorText    | String                   | ''            |                                        |
| requiredText | String                   | ''            |                                        |
| alignment    | VsfCheckboxAlignment    | leading       |   leading,  trailing                   |
| indeterminate| Boolean                  | false         |                                        |
| invalid      | Boolean                  | false         |                                        |
| disabled     | Boolean                  | false         |                                        |
| role         | String                   | ''            |                                        |
| required     | Boolean                  | false         |                                        |

<!-- vue -->
## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |
<!-- end vue -->

## Accessibility notes

Pressing the Space key triggers checkbox

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfCheckbox/VsfCheckbox.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfCheckbox/VsfCheckbox.tsx
<!-- end react -->
