# Checkbox

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfCheckbox` is a wrapper around `<input type="checkbox">` with additional styles for different states . It can be used for forms or expressing consents. 

The root element is an `<input>` so any attributes that can be used on an `<input>` can be used on `SfCheckbox`.

::info
If you need to make this field required, it is crucial to communicate this intention clearly to your end users. You can find more information about [required form fields in our guide here](../blocks/FormFields.md).
::

## Examples

### Checkbox without label

::vue-only
You can use `v-model` with `SfCheckbox` to bind the value to a variable in your component.
::

<Showcase showcase-name="Checkbox/CheckboxWithoutLabel">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Checkbox/CheckboxWithoutLabel.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Checkbox/CheckboxWithoutLabel.tsx
::

</Showcase>

### Checkbox aligned to the left

When using `SfCheckbox` with a label, you can use Tailwind's `peer` modifiers to control the styles of the label based on the state of the checkbox.

<Showcase showcase-name="Checkbox/CheckboxLeading">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Checkbox/CheckboxLeading.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Checkbox/CheckboxLeading.tsx
::

</Showcase>

### Checkbox aligned to the right

<Showcase showcase-name="Checkbox/CheckboxTrailing">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Checkbox/CheckboxTrailing.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Checkbox/CheckboxTrailing.tsx
::

</Showcase>

## Accessibility notes

`SfCheckbox` is a wrapper for `<input type="checkbox">` so it inherits all the accessibility features of the native checkbox.

It's focusable and can be toggled with `Space`.

## Playground

<Generate style="height: 450px" />

#tab-2

## Props


::vue-only
| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| `modelValue`   | `boolean | string[]`       | `undefined`     |                                        |
| `invalid`      | `boolean`                  | `false`         |                                        |

::

::react-only
| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| `className`    | `string`                   |               |                                        |
| `invalid`      | `boolean`                  | `false`         |                                        |
::

::vue-only
## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |
::

#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfCheckbox/SfCheckbox.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfCheckbox/SfCheckbox.tsx
::
::
