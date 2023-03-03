---
layout: AtomLayout
hideBreadcrumbs: true
description: Counter is a part of other complex components. Informs in numerical (integer) form about the number of elements.
---
# Counter

::: slot usage

{{ $frontmatter.description }}

## Counter

The basic component with value inside the parentheses in all sizes accessible by prop. 

<Showcase showcase-name="Counter/Counter">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Counter/Counter.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Counter/Counter.tsx
<!-- end react -->
</Showcase>


## Counter pill

The pill version of the component with size set to `xl` and colored background. 

<Showcase showcase-name="Counter/CounterPill">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Counter/CounterPill.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Counter/CounterPill.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate />

:::

::: slot api
## Props

| Prop name | Type              | Default value | Possible values                       |
|-----------|-------------------|---------------|---------------------------------------|
| size      | `VsfCounterSize` | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl` |
| pill      | `Boolean`         | `false`       |                                       |
<!-- react -->
| children  | `ReactNode`       |               |                                       |
| className | `String`          |               |                                       |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | To be filled with counter value   |
<!-- end vue -->

:::

::: slot source
## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfCounter/VsfCounter.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfCounter/VsfCounter.tsx
<!-- end react -->

:::
