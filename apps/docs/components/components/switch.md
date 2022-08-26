# Switch component

The Switch component is an input element of type checkbox that allows to turn single values on and off.

<PlaygroundWrapper component="Switch"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11389%3A20690)

## Props

| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------------------- |
| name         | String   | ''            |                                        |
| value        | String   | ''            |                                        |
| label        | String   | ''            |                                        |
| helpText     | String   | ''            |                                        |
| errorText    | String   | ''            |                                        |
| rightCheckbox| Boolean  | false         |                                        |
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
| onChange          | input change event             |

## Accessibility notes

Pressing the Space key triggers a button.
The switch has role `switch`.


## Source code

<<<../../mitosis/src/blocks/VsfSwitch/VsfSwitch.lite.tsx
