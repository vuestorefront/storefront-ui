# Checkbox component

The Checkbox component is an input element of type checkbox that allows to turn single values on and off.

<PlaygroundWrapper component="Checkbox"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10650%3A7132)

## Props

| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------------------- |
| name         | String   | ''            |                                        |
| value        | String   | ''            |                                        |
| label        | String   | ''            |                                        |
| helpText     | String   | ''            |                                        |
| errorText    | String   | ''            |                                        |
| rightCheckbox| Boolean  | false         |                                        |
| indeterminate| Boolean  | false         |                                        |
| invalid      | Boolean  | false         |                                        |
| disabled     | Boolean  | false         |                                        |
| required     | Boolean  | false         |                                        |
| modelValue   | Any      | ''            |                                        |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|           |                                   |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

## Accessibility notes

Pressing the Space key triggers a button.

## Source code

<<<../../mitosis/src/blocks/VsfCheckbox/VsfCheckbox.lite.tsx
