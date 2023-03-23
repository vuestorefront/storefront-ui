---
layout: AtomLayout
hideBreadcrumbs: true
description: A modal is a window overlaid on website content for focus on primary action that requires user interaction. That is, users cannot interact with the content outside.
---
# Modal

::: slot usage

{{ $frontmatter.description }}

## Accessibility notes

The Modal is using the ARIA `aria-modal="true"` attribute.

When Modal is opened `focus` is trapped within it's root container. The component can be closed via `Escape` key when `disableEsc` is set to `false` (default).

Use `aria-labelledby` or `aria-label` to provide an accessible label for modal - usually title of modal can be used as such. To add more context use `aria-describedby` or `aria-description`. Both techiques can be seen in the code examples below.

Modal can be used in different contexts, so no `role` is being enforced on it byt default. Make sure to add proper `role` based on your needs:

- Use `role="alertdialog"` for dialogs where immediate user response is required. [See details.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- Use `role="dialog"` for generic dialogs. [See details.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Notes

Modal contains tab sequence which means, `Tab` and `Shift + Tab` do not move focus outside the modal. Used to prompt the user for input or response to displayed information.

### Basic usage

Modal can be used to provide additional interactions for your users.

<Showcase showcase-name="Modal/ModalBasic" style="min-height:400px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Modal/ModalBasic.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Modal/ModalBasic.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate style="height: 600px"/>

:::

::: slot api

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
<!-- vue -->
| `modelValue`            | `boolean`                    | `false`         |                                        |
| `tag`                   | `string`                     | `'div'`         |                                        |
<!-- end vue -->
<!-- react -->
| `open`                  | `boolean`                    | `false`         |                                        |
| `as`                    | `ReactElement`               | `div`         |                                        |
<!-- end react -->
|  `disableClickAway`     | `boolean`                    | `false`        |                                        |
|  `disableEsc`           |  `boolean`                   | `false`        |                                        |
<!-- react -->
|  `children`             |  `ReactNode`                 |               |                                        |
|  `onClose`              |  `Function`                  |               |                                        |
<!-- end react -->
<!-- vue -->

## Slots

| Slot name | Description             |
| --------- | ----------------------- |
| `default`   | place content of modal |

## Events

| Event name        | Trigger                        |
| ----------------- | ------------------------------ |
| `update:modelValue` | emits when hitting `esc` key (when `disableEsc` is set to `false`) and on click outside (when `disableClickAway` is set to `false`) |
<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfModal/SfModal.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfModal/SfModal.tsx
<!-- end react -->
</SourceCode>
:::
