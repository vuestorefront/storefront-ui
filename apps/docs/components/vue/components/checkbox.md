# Checkbox component

The Checkbox component is an input element of type checkbox that allows to turn single values on and off.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10650%3A7132)

## Props



| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | String                   | ''            |                                        |
| label        | String                   | ''            |                                        |
| helpText     | String                   | ''            |                                        |
| checked      | Boolean                  | false         |                                        |
| errorText    | String                   | ''            |                                        |
| requiredText | String                   | ''            |                                        |
| alignment    | VsfCheckboxAlignments    | leading       |   leading,  trailing                   |
| indeterminate| Boolean                  | false         |                                        |
| invalid      | Boolean                  | false         |                                        |
| disabled     | Boolean                  | false         |                                        |
| required     | Boolean                  | false         |                                        |





## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|           |                                   |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

## Accessibility notes

Pressing the Space key triggers checkbox

## Source code



<<<../../../packages/sfui/frameworks/vue/components/VsfCheckbox/VsfCheckbox.vue




