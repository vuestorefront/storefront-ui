# Select component

The Select component is used for collecting user provided information from a list of options.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11375%3A16313)

## Props

| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------------------- |
| name         | String   | ''            |                                        |
| value        | String   | ''            |                                        |
| label        | String   | ''            |                                        |
| disabled     | Boolean  | false         |                                        |
| invalid      | Boolean  | false         |                                        |
| required     | Boolean  | false         |                                        |
| options      | SelectOption[]  | []         |                                        |
| placeholderText      | string  | '--Please choose an option--'         |                                        |
| requiredText      | string  | '*Required'         |                                        |
| helpText     | string  | 'Help text'         |                                        |
| errorText    | string  | 'Error text'         |                                        |
| modelValue   | Any      | undefined           |                                        |

## Slots

No slots available

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

## Accessibility notes

Keyboard users can use `tab`, open select with `space` and select options using `arrows`.
Selected option is marked with `aria-selected`.

## Source code

<<<../../mitosis/src/blocks/VsfSelect/VsfSelect.lite.tsx
