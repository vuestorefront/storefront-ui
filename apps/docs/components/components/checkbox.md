---
layout: AtomLayout
hideBreadcrumbs: true
description: A checkbox is an input that has three possible values - true, false, or indeterminate. When an indeterminate value is not used, these are effectively boolean checkboxes.
---
# Checkbox

::: slot usage

{{ $frontmatter.description }}

## Notes

It is used especially for forms or expressing consents.
Note that using indeterminate state requires additional code to manage it. See this case in the playground below.

## Accessibility notes

Pressing the Space key triggers checkbox.

## Checkbox without label

The simple checkbox input without additional elements. 

<Showcase showcase-name="Checkbox/CheckboxNoLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Checkbox/CheckboxNoLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Checkbox/CheckboxNoLabel.tsx
<!-- end react -->
</Showcase>

## Checkbox aligned to the left

The component with label element and the input aligned to the left edge of the screen. 

<Showcase showcase-name="Checkbox/CheckboxLeading">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Checkbox/CheckboxLeading.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Checkbox/CheckboxLeading.tsx
<!-- end react -->
</Showcase>

## Checkbox aligned to the right

The component with label element and the input aligned to the right edge of the screen. 

<Showcase showcase-name="Checkbox/CheckboxTrailing">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Checkbox/CheckboxTrailing.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Checkbox/CheckboxTrailing.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate style="height: 450px" />

:::

::: slot api


## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
<!-- vue -->
| modelValue   | Boolean | string[]       | undefined     |                                        |
<!-- end vue -->
<!-- react -->
| className    | String                   |               |                                        |
<!-- end react -->
| invalid      | Boolean                  | false         |                                        |

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
<<<../../../packages/sfui/frameworks/vue/components/VsfCheckbox/VsfCheckbox.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfCheckbox/VsfCheckbox.tsx
<!-- end react -->
</SourceCode>
:::
