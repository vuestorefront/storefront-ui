# Select component

The Select component is used for collecting user provided information from a list of options.

<PlaygroundWrapper component="Select"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11375%3A16313)

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

<<<../../mitosis/src/blocks/VsfCheckbox/VsfSelect.lite.tsx
