# Radio component

Radio is a common way to allow users to make a single selection from a list of options. Once a user selects one of the radio buttons in a group, the group can’t be easily reset to displaying no radio buttons selected.
<PlaygroundWrapper component="Radio"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=14307%3A50081)

## Props

| Prop name   | Type                          | Default value  | Possible values                         |
|-------------|-------------------------------|----------------|-----------------------------------------|
| id          | String                        |                |                                         |
| variant     | String                        | `base`         | `base`, `multiline`, `right`, `tile`    |
| name        | String                        |                |                                         |
| value       | String, String[], number      |                |                                         |
| disabled    | Boolean                       | false          |                                         |
| selected    | String                        |                |                                         |
| invalid     | Boolean                       | false          |                                         |
| label       | String                        | `Label`        |                                         |
| helpText    | String                        | `Help text`    |                                         |
| modelValue  | any                           |                |                                         |
| size        | `VsfRadioSize`                | `base`         | `lg`, `base`, `sm`                      |
| alignment   | `VsfRadioAlignment`           | `left`         | `left`, `right`                         |

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

<<<../../mitosis/src/blocks/VsfRadio/VsfRadio.lite.tsx