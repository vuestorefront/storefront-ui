---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Dialog component

Dialog component based on native `<dialog>` is simple modal component with purpose of displaying text, buttons, whetever user would like

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11248%3A15636)

## Props

| Prop name    | Type      | Default value | Possible values |
| ------------ | --------- | ------------- | --------------- |
| hideCloseButton | `boolean` | `false`       | When true, hides the default "X" close button located in dialog's top-right corner |
| outsideClickClose | `boolean` | `false` | Controls whether click on outside overlay should close the dialog or not |
<!-- vue -->
| modelValue | `boolean` | `false` | Controls whether the dialog is open or not |
<!-- end vue -->
<!-- react -->
| open | `boolean` | `false` | Controls whether the dialog is open or not |
| className | `String` | | |
| onClose | `(isOpened: boolean) => void` | | Triggered when dialog open state changes |
| children | `ReactNode` | | Allows to specify custom dialog content |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |         Description          |
| --------- | :--------------------------: |
| default   | Allows to specify custom dialog content |

## Events

| Event name | Trigger |
| ---------- | :-----: |
| update:modelValue | Triggered when dialog open state changes |
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
