---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Select

The Select component is used for collecting user provided information from a list of options.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11375%3A16313)

<!-- vue -->
## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| name         | String          | ''            |                                        |
| options      | String[]        | []            |                                        |
| value        | String          | ''            |                                        |
| label        | String          | ''            |                                        |
| size         | VsfSelectSizes  | base          | sm, base, lg                           |
| disabled     | Boolean         | false         |                                        |
| invalid      | Boolean         | false         |                                        |
| required     | Boolean         | false         |                                        |
| placeholder  | String          | ''            |                                        |
| requiredText | String          | '*Required'   |                                        |
| helpText     | String          | ''            |                                        |
| errorText    | String          | ''            |                                        |

## Slots

| Slot name     |            Description            |
| ---------     | :-------------------------------: |
|  default      |   Place for select options        |
|  placeholder  |   Custom option for placeholder   |
|  label        |   Custom label                    |
|  errorText    |   Custom error text               |
|  helpText     |   Custom help text                |
|  requiredText |   Custom required text            |



<!-- end vue -->

<!-- react -->

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| name         | String          | ''            |                                        |
| options      | String[]        | []            |                                        |
| label        | String          | ''            |                                        |
| size         | VsfSelectSizes  | base          | sm, base, lg                           |
| disabled     | Boolean         | false         |                                        |
| invalid      | Boolean         | false         |                                        |
| required     | Boolean         | false         |                                        |
| placeholder  | String          | ''            |                                        |
| requiredText | String          | '*Required'   |                                        |
| helpText     | String          | ''            |                                        |
| errorText    | String          | ''            |                                        |
| onChange     | Function        |               |                                        |

<!-- end react -->

<!-- vue -->

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

<!-- end vue -->

## Accessibility notes

Keyboard users can use `tab`, open select with `space` and select options using `arrows`.
Selected option is marked with `aria-selected`.

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfSelect/VsfSelect.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfSelect/VsfSelect.tsx

<!-- end react -->
