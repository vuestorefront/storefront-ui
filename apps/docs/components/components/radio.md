---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Radio

A radio is a checkable input always appears in a group of elements with the same role, where no more than one of the radio can be checked at a time.

Used for especially forms.

For filtering use [ListItemFilterRadio](listitemfilterradio.md) component instead of Radio. For long set of options use Select component.

<Generate />

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
