#  Switch component

VsfSwitch is an input widget that allows users to choose one of two values: on or off.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2-%7C-Development?node-id=19515%3A62225&t=sslAXNqc1mDRjyZJ-0)

## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | String                   | ''            |                                        |
| label        | String                   | ''            |                                        |
| helpText     | String                   | ''            |                                        |
| modelValue   | Boolean | string[]       | undefined     |                                        |
| alignment    | VsfCheckboxAlignments    | prefix        |   prefix,  suffix                      |
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
