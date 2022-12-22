# Dialog component

Dialog component based on native `<dialog>` is simple modal component with purpose of displaying text, buttons, whetever user would like

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11248%3A15636)

## Props

| Prop name    | Type      | Default value | Possible values |
| ------------ | --------- | ------------- | --------------- |
| hideCloseButton | `boolean` | `false`       |                 |
<!-- vue -->
| modelValue | `boolean` | `false` | |
<!-- end vue -->
<!-- react -->
| open | `boolean` | `false` | |
| className | `String` | | |
| onClose | `(isOpened: boolean) => void` | | |
| children | `ReactNode` | | |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |         Description          |
| --------- | :--------------------------: |
| default   | replaces the default content |

## Events

| Event name | Trigger |
| ---------- | :-----: |
| update:modelValue | trigger when dialog is closed|
<!-- end vue -->

## Accessibility notes

The `<dialog>` element is exposed by browsers similarly to custom dialogs using the ARIA `role="dialog"` attribute. `<dialog>` elements invoked by the showModal() method will have an implicit `aria-modal="true"`, where as `<dialog>` elements invoked by the `show()` method, or rendered by use of the open attribute or changing the default display of a `<dialog>` will be exposed as `[aria-modal="false"]`.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDialog/VsfDialog.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfDialog/VsfDialog.tsx
<!-- end react -->
