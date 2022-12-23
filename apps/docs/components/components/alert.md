---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Alert component

The Alert component is a notification that keeps people informed of the status of the system and which may or not require the user respond.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10532%3A5529)

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| title                | String                     | `""`            |                                        |
| message           | String                     | `""`            |                                        |
| type                  | `VsfAlertTypesKeys`        | `gray`        | `gray`, `positive`, `warning`, `error`, `info` |
| persistent            | Boolean                    | `false`       |                                        |
<!-- react -->
| slotPrefix              | Element, Element[], string | `""`            |                                        |
| slotSuffix            | Element, Element[], string | `""`            |                                        |
| handleCloseClick      | () => void                 | `""`            |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |                        Description                        |
| --------- | :-------------------------------------------------------: |
| prefix    |    shown before alert text, replaces the default icon     |
| suffix    | shown after alert text, replaces the default close button |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| close      | emits on clicking close button |

<!-- end vue -->
## Accessibility notes

Alert component is using `role='alert'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfAlert/VsfAlert.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfAlert/VsfAlert.tsx
<!-- end react -->
