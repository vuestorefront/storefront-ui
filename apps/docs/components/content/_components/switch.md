# Switch

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`SfSwitch` allows users to control a boolean value. This can be used to enable/disable features, especially on mobile.

It uses an `<input type="checkbox">` with additional stylings to give it the appearance of a switch.

From a functional perspective, it is similar to the [`SfCheckbox`](/checkbox.html) component, except the checkbox can handle indeterminate states. The two possible values are true and false. 

## Examples

## Switch without label

Switch base component without a label.

<Showcase showcase-name="Switch/SwitchWithoutLabel">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Switch/SwitchWithoutLabel.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Switch/SwitchWithoutLabel.tsx
::

</Showcase>

## Switch with leading control

<Showcase showcase-name="Switch/SwitchLeading">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Switch/SwitchLeading.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Switch/SwitchLeading.tsx
::

</Showcase>

## Switch with trailing control

Switch component with a label align on the left.

<Showcase showcase-name="Switch/SwitchTrailing">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Switch/SwitchTrailing.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Switch/SwitchTrailing.tsx
::

</Showcase>

## Accessibility notes

`SfSwitch` is built using the native `<input type="checkbox">` element. This means that has all of the same keyboard navigation and accessibility features as a native checkbox.

By default, it comes with a `role="switch"` attribute. This is useful for screen readers, which can announce the element as a switch.

## Playground

<Generate style="height: 380px" />

#tab-2

## Props



::vue-only
| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| `modelValue`   | `boolean | string[]`       | `undefined`     |                                        |
| `value`        | `string`                   |             |                                        |
::

::react-only
| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| `value`        | `string`                   |             |                                        |
| `onChange`     | `Function`                 |               |                                        |
| `className`    | `string`                   |               |                                        |
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
<<<../../../../../packages/sfui/frameworks/vue/components/SfSwitch/SfSwitch.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfSwitch/SfSwitch.tsx
::
::