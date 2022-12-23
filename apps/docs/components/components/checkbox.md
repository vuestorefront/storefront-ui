---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Checkbox component

The Checkbox component is an input element of type checkbox that allows to turn single values on and off.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10650%3A7132)

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
| onChange     | Function                 |               |                                        |


<!-- end react -->

## Slots

| Slot name     |            Description            |
| ---------     | :-------------------------------: |
|  label        |   Custom label                    |
|  errorText    |   Custom error text               |
|  helpText     |   Custom help text                |
|  requiredText |   Custom required text            |

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
