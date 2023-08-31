---
repoPath: /components/switch.md
layout: AtomLayout
hideBreadcrumbs: true
---
#  Switch

::: slot usage

`SfSwitch` allows users to control a boolean value. This can be used to enable/disable features, especially on mobile.

It uses an `<input type="checkbox">` with additional stylings to give it the appearance of a switch.

From a functional perspective, it is similar to the [`SfCheckbox`](/checkbox.html) component, except the checkbox can handle indeterminate states. The two possible values are true and false. 

## Examples

## Switch without label

Switch base component without a label.

<Showcase showcase-name="Switch/SwitchWithoutLabel">

<<<../../preview/nuxt/pages/showcases/Switch/SwitchWithoutLabel.vue

</Showcase>

## Switch with leading control

<Showcase showcase-name="Switch/SwitchLeading">

<<<../../preview/nuxt/pages/showcases/Switch/SwitchLeading.vue

</Showcase>

## Switch with trailing control

Switch component with a label align on the left.

<Showcase showcase-name="Switch/SwitchTrailing">

<<<../../preview/nuxt/pages/showcases/Switch/SwitchTrailing.vue

</Showcase>

## Accessibility notes

`SfSwitch` is built using the native `<input type="checkbox">` element. This means that has all of the same keyboard navigation and accessibility features as a native checkbox.

By default, it comes with a `role="switch"` attribute. This is useful for screen readers, which can announce the element as a switch.

## Playground

<Generate style="height: 380px" />
:::

::: slot api
## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| `modelValue`   | `boolean | string[]`       | `undefined`     |                                        |
| `value`        | `string`                   |             |                                        |


## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |
:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfSwitch/SfSwitch.vue
</SourceCode>
:::