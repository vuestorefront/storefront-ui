---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Button

The Button component allow users to take actions, and make choices, with a single tap or click.

## Note

In order to have "square" button with even paddings on each side (e.g for Icon-only button), please use `prefix/suffix` vue slot or `slotPrefix/slotSuffix` props instead of default slot or `children` prop.
Button text content by default is being wrapped, however this behaviour can be changed via `truncate` prop.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=11375%3A16132&t=LIzxPt9OJb9F1mXf-1)

## Props

| Prop name | Type                | Default value | Possible values                    |
| --------- | ------------------- | ------------- | ---------------------------------- |
| variant   | `VsfButtonVariants` | `primary`     | `primary`, `secondary`, `tertiary` |
| size      | `VsfButtonSizes`    | `base`        | `sm`, `base`, `lg`                 |
| link      | `String`            |               | `/my-cool-page`                    |
| tile      | `Boolean`           | `false`       |                                    |
| disabled  | `Boolean`           | `false`       |                                    |
| greyscale | `Boolean`           | `false`       |                                    |
| truncate  | `Boolean`           | `false`       |                                    |
| rounded   | `Boolean`           | `false`       |                                    |
| block     | `Boolean`           | `false`       |                                    |
<!-- react -->| slotPrefix | `ReactNode` | | Left side slotted content |
| children | `ReactNode` | | Default slotted content |
| slotPrefix | `ReactNode` | | Left side slotted content |
| slotSuffix | `ReactNode` | | Right side slotted content |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |         Description          |
| --------- | :--------------------------: |
| prefix    |     before default slot      |
| default   | replaces the default content |
| suffix    |      after default slot      |
<!-- end vue -->

<!-- react -->
## Events

| Event name |       Trigger        |
| ---------- | :------------------: |
| onClick     | Details of `<a>` or `<button>` element |
<!-- end react -->

## Accessibility notes

Button component is using `role='button'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user.

Button component can be render as `<button />` or `<a />` if `link` prop is provided.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfButton/VsfButton.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfButton/VsfButton.tsx
<!-- end react -->
