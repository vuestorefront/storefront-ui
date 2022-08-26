# Alert component

The Alert component is a notification that keeps people informed of the status of the system and which may or not require the user respond.

<PlaygroundWrapper component="AlertBase"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10532%3A5529)

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| header                | String                     | ''            |                                        |
| description           | String                     | ''            |                                        |
| type                  | `VsfAlertTypesKeys`        | `info`        | `positive`, `warning`, `error`, `info` |
| persistent            | Boolean                    | `false`       |                                        |
| slotIcon              | Element, Element[], string | ''            |                                        |
| slotButton            | Element, Element[], string | ''            |                                        |
| handleCloseClick      | () => void                 | ''            |                                        |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| icon      |     replaces the default icon     |
| button    | replaces the default close button |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| close      | emits on clicking close button |

## Accessibility notes

Alert component is using `role='alert'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user.

## Source code

<<<../../mitosis/src/blocks/VsfAlert/VsfAlert.lite.tsx
