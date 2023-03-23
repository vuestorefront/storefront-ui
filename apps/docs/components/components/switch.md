---
layout: AtomLayout
hideBreadcrumbs: true
description: A switch is an input similar to a checkbox component, except for handling the indeterminate state. The two possible values are true and false. Used for enable/disable features, especially on mobile.
---
#  Switch

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

Switch component is build using `input` tag with `type='checkbox'`.
## Notes

In forms, it might be a better choice to use a Checkbox component.

## Switch without label

Switch base component without a label.

<Showcase showcase-name="Switch/SwitchWithoutLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Switch/SwitchWithoutLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Switch/SwitchWithoutLabel.tsx#source
<!-- end react -->

</Showcase>

## Switch with control on the left

Switch component with a label on the right.

<Showcase showcase-name="Switch/SwitchLeading">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Switch/SwitchLeading.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Switch/SwitchLeading.tsx#source
<!-- end react -->

</Showcase>

## Switch with control on the right

Switch component with a label align on the left.

<Showcase showcase-name="Switch/SwitchTrailing">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Switch/SwitchTrailing.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Switch/SwitchTrailing.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate style="height: 380px" />
:::

::: slot api
## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
<!-- vue -->
| `modelValue`   | `boolean` | `string[]`       | `undefined`     |                                        |
<!-- end vue -->
| `value`        | `string`                   |             |                                        |
<!-- react -->
| `onChange`     | `Function`                 |               |                                        |
| `className`    | `string`                   |               |                                        |
<!-- end react -->

<!-- vue -->

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |
<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfSwitch/SfSwitch.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfSwitch/SfSwitch.tsx
<!-- end react -->
</SourceCode>
:::