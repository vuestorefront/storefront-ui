# Modal

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfModal` creates a modal window that opens on top of the main window. This component can be used to display important information that requires user interaction.

In addition to the UI aspect, `SfModal` adds additional functionality that implements several best practices:

1. Traps focus within the modal using the [`useTrapFocus`](../hooks/useTrapFocus.html) function
2. Allows the user to close the modal by pressing the `Escape` key.
3. Allows the user to close the modal by clicking outside of it.

The closing behavior can be disabled by setting the `disableClickAway`/`disableEsc` prop to `true`.

## Examples

### Basic usage

::vue-only
The visibility of the modal is controlled by `v-model`.
::
::react-only
The visibility of the modal is controlled by the `open` prop.

::
This example also uses the [`useDisclosure`](../hooks/useDisclosure.html) function to provide nice controls for handling the modal's visibility.

<Showcase showcase-name="Modal/ModalBasic" style="min-height:400px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Modal/ModalBasic.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Modal/ModalBasic.tsx
::

</Showcase>

### Animated

You can make smooth transitions when the modal pops up.

<Showcase showcase-name="Modal/ModalTransition" style="min-height:400px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Modal/ModalTransition.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Modal/ModalTransition.tsx
::

</Showcase>

## Accessibility notes

`SfModal` sets the `aria-modal="true"` attribute. Also, it sets the `tabindex` to `-1` so `Tab` and `Shift + Tab` do not move focus outside the modal.

Since you may need to use this component in different contexts, there is no `role` attribute set by default. Make sure to add proper `role` based on your needs:

- `role="alertdialog"` for dialogs where immediate user response is required. [See details.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- `role="dialog"` for generic dialogs. [See details.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

You should add `aria-labelledby` or `aria-label` attributes to provide an accessible label for your modal - usually this value can be the title of the modal. To add more context, you should use the `aria-describedby` or `aria-description` attributes.

Both techniques can be seen in the code examples above.

## Playground

<Generate style="height: 600px"/>

#tab-2

## Props


::vue-only
| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| `modelValue`            | `boolean`                    | `false`         |                                        |
| `tag`                   | `string`                     | `'div'`         |                                        |
|  `disableClickAway`     | `boolean`                    | `false`        |                                        |
|  `disableEsc`           |  `boolean`                   | `false`        |                                        |
::
::react-only
| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| `open`                  | `boolean`                    | `false`         |                                        |
| `as`                    | `ReactElement`               | `div`         |                                        |
|  `disableClickAway`     | `boolean`                    | `false`        |                                        |
|  `disableEsc`           |  `boolean`                   | `false`        |                                        |
|  `children`             |  `ReactNode`                 |               |                                        |
|  `onClose`              |  `Function`                  |               |                                        |
::


::vue-only

## Slots

| Slot name | Description             |
| --------- | ----------------------- |
| `default`   | place content of modal |

## Events

| Event name        | Trigger                        |
| ----------------- | ------------------------------ |
| `update:modelValue` | emits when hitting `esc` key (when `disableEsc` is set to `false`) and on click outside (when `disableClickAway` is set to `false`) |
::
#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfModal/SfModal.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfModal/SfModal.tsx
::

::
