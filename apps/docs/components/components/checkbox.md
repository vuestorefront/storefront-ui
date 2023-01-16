---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Checkbox

The Checkbox component is an input element of type checkbox that allows to turn single values on and off.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=11375%3A16203&t=LIzxPt9OJb9F1mXf-1)

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
| alignment    | VsfCheckboxAlignments    | leading       |   leading,  trailing                   |
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
| alignment    | VsfCheckboxAlignments    | leading       |   leading,  trailing                   |
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
