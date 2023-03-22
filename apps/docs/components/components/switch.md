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

## Alignment

Switch component can have a leading or trailing alignment.

<Showcase showcase-name="Switch/SwitchAlignment">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Switch/SwitchAlignment.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Switch/SwitchAlignment.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate style="height: 380px" />
:::

::: slot api
## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| value        | String                   | ''            |                                        |
<!-- vue -->
| modelValue   | Boolean | string[]       | undefined     |                                        |
<!-- end vue -->
<!-- react -->
| className    | String                   |               |                                        |
| onChange     | Function                 |               |                                        |

<!-- end react -->

<!-- vue -->

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| update:modelValue | triggers v-model update event |
<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSwitch/VsfSwitch.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfSwitch/VsfSwitch.tsx
<!-- end react -->
</SourceCode>
:::