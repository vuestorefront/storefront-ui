# Button component

The Button component allow users to take actions, and make choices, with a single tap or click.

<PlaygroundWrapper component="VsfButton"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11375%3A16132)

## Props

| Prop name  | Type                    | Default value | Possible values                                                   |
| ---------- | ----------------------- | ------------- | ----------------------------------------------------------------- |
| variant    | `VsfButtonVariantsKeys` | `contained`   | `contained`, `outlined`, `plain`                                  |
| color      | `VsfButtonColorsKeys`   | `primary`     | `primary`, `secondary`, `gray`, `positive`, `negative`, `warning` |
| size       | `VsfButtonSizesKeys`    | `base`        | `sm`, `base`, `lg`                                                |
| slotPrefix | `SlotType`              |               | Left side slotted content                                         |
| children   | `SlotType`              | `Hello`       | Default slotted content                                           |
| slotSuffix | `SlotType`              |               | Right side slotted content                                        |
| disabled   | `Boolean`               | false         | false                                                             |
| link       | `String`                |               | '/my-cool-page'                                                   |
| onClick    | () => void              |               |                                                                   |
| tile       | `Boolean`               |               |                                                                   |
| icon       | `Boolean`               |               |                                                                   |
| rounded    | `Boolean`               |               |                                                                   |
| block      | `Boolean`               |               |                                                                   |
| tag        | `String`                | `button`      | `button`, `a`                                                     |

## Slots

| Slot name |         Description          |
| --------- | :--------------------------: |
| prefix    |     before default slot      |
| default   | replaces the default content |
| suffix    |      after default slot      |

## Accessibility notes

Button component is using `role='button'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user.

Button component can be render as `<button />` or `<a />` if `link` prop is provided.

## Source code

<<<../../mitosis/src/blocks/VsfButton/VsfButton.lite.tsx
