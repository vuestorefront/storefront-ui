---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Radio

Radio is a common way to allow users to make a single selection from a list of options.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11375%3A16247)

<!-- vue -->

## Props

| Prop name  | Type                | Default value | Possible values       |
| ---------- | ------------------- | ------------- | --------------------- |
| name       | String              |               |                       |
| modelValue | String              |               |                       |
| disabled   | Boolean             | false         |                       |
| required   | Boolean             | false         |                       |
| label      | String              |               |                       |
| helpText   | String              | `Help text`   |                       |
| modelValue | any                 |               |                       |
| alignment  | `VsfRadioAlignment` | `leading`     | `trailing`, `leading` |

## Events

| Event name        |          Trigger          |
| ----------------- | :-----------------------: |
| update:modelValue | triggers radio event emit |

<!-- end vue -->

<!-- react -->

## Props

| Prop name | Type                | Default value | Possible values       |
| --------- | ------------------- | ------------- | --------------------- |
| name      | String              |               |                       |
| value     | String              |               |                       |
| checked   | boolean             |               |                       |
| disabled  | Boolean             | false         |                       |
| required  | Boolean             | false         |                       |
| label     | String              |               |                       |
| helpText  | String              | `Help text`   |                       |
| alignment | `VsfRadioAlignment` | `leading`     | `trailing`, `leading` |
| className | String              |               |                       |

## Events

| Event name |          Trigger          |
| ---------- | :-----------------------: |
| onChange   | triggers radio event emit |

<!-- end react -->

## Accessibility notes

- Providing a bigger hit area for your radio buttons - select a radio button by clicking on its associated `label` element, as well as on the radio button itself
- [ARIA - radio role:](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role) The radio role is one of a group of checkable buttons, in a radiogroup, where no more than one of the buttons can be checked at a time.
- A radio element is a checkable input in a group of role elements, of which only one of which can be checked at a time. The radio elements must be grouped together in a [`radiogroup`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) to indicate which ones affect the same value.

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfRadio/VsfRadio.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfRadio/VsfRadio.tsx

<!-- end react -->
