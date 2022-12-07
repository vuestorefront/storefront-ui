# RadioGroup component

RadioGroup is a common way to allow users to make a single selection from a list of radios. It provides additional error messages and alignment of the list. It is a wrapper for Radio components.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=9533%3A21244)

## Props

| Prop name    | Type                      | Default value   | Possible values                  |
|--------------|---------------------------|-----------------|----------------------------------|
| direction    | `VsfRadioGroupDirection`  | `vertical`      | `vertical`, `horizontal`         |
| variant      | `VsfRadioGroupVariants`   | `base`          | `base`, `tile`                   |
| children     | `SlotType`                | `base`          | `Element`, `Element[]`, `string` |
| requiredText | string                    | `*Required`     |                                  |
| errorText    | string                    | `Error message` |                                  |
| helpText     | string                    | `Help text`     |                                  |
| required     | Boolean                   | false           |                                  |
| isInvalid    | Boolean                   | false           |                                  |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|           |                                   |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

## Accessibility notes

- Providing a bigger hit area for your radio buttons - select a radio button by clicking on its associated `label` element, as well as on the radio button itself
- [ARIA - radio role:](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role) The radio role is one of a group of checkable buttons, in a radiogroup, where no more than one of the buttons can be checked at a time.
- A radio element is a checkable input in a group of role elements, of which only one of which can be checked at a time. The radio elements must be grouped together in a [`radiogroup`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) to indicate which ones affect the same value.
## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfRadio/VsfRadioGroup.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfRadio/VsfRadioGroup.tsx

<!-- end react -->
