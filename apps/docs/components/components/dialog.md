---
layout: AtomLayout
hideBreadcrumbs: true
description: A dialog is a window overlaid on website content for focus on primary action that requires user interaction.That is, users cannot interact with the content outside.
---
# Dialog

{{ $frontmatter.description }}

<Generate />

## Notes

Dialog contains tab sequence which means, `Tab` and `Shift + Tab` do not move focus outside the dialog. Used to prompt the user for input or response to displayed information.

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

When Dialog is opened `focus` is trapped within it's root container.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDialog/VsfDialog.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfDialog/VsfDialog.tsx
<!-- end react -->
