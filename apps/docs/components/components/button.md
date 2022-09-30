# Button component

The Button component allow users to take actions, and make choices, with a single tap or click.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11375%3A16132)

## Props

| Prop name | Type                    | Default value | Possible values                    |
| --------- | ----------------------- | ------------- | ---------------------------------- |
| variant   | `VsfButtonVariantsKeys` | `primary`     | `primary`, `secondary`, `tertiary` |
| size      | `VsfButtonSizesKeys`    | `base`        | `sm`, `base`, `lg`                 |
| tag       | `String`                | `button`      | `button`, `a`                      |
| link      | `String`                |               | `/my-cool-page`                    |
| tile      | `Boolean`               |               |                                    |
| disabled  | `Boolean`               |               |                                    |
| icon      | `Boolean`               |               |                                    |
| rounded   | `Boolean`               |               |                                    |
| block     | `Boolean`               |               |                                    |

### React only:

| Prop name  | Type        | Default value | Possible values            |
| ---------- | ----------- | ------------- | -------------------------- |
| children   | `ReactNode` |               |                            |
| className  | `String`    |               |                            |
| slotPrefix | `ReactNode` |               | Left side slotted content  |
| children   | `ReactNode` |               | Default slotted content    |
| slotSuffix | `ReactNode` |               | Right side slotted content |
| onClick    | `Function`  |               |                            |

## Slots

### Vue only:

| Slot name |         Description          |
| --------- | :--------------------------: |
| prefix    |     before default slot      |
| default   | replaces the default content |
| suffix    |      after default slot      |

## Accessibility notes

Button component is using `role='button'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user.

Button component can be render as `<button />` or `<a />` if `link` prop is provided.

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfButton/VsfButton.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfButton/VsfButton.tsx
