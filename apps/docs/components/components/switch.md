---
layout: ComponentLayout
hideBreadcrumbs: true
---
#  Switch

A switch is an input similar to a checkbox component, except for handling the indeterminate state. The two possible values are true and false.

Used for enable/disable features, especially on mobile.

In forms, a better choice may be to use a Checkbox component.

<Generate />

## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | String                   | ''            |                                        |
| label        | String                   | ''            |                                        |
| helpText     | String                   | ''            |                                        |
| modelValue   | Boolean | string[]       | undefined     |                                        |
| alignment    | VsfCheckboxAlignment    | prefix        |   prefix,  suffix                      |
| disabled     | Boolean                  | false         |                                        |
<!-- react -->
| className    | String                   |               |                                        |
| onChange     | Function                 |               |                                        |

<!-- end react -->

<!-- vue -->

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |
<!-- end vue -->


## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSwitch/VsfSwitch.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfSwitch/VsfSwitch.tsx
<!-- end react -->
