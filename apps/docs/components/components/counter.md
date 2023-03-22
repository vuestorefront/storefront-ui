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
<<<../../preview/next/pages/showcases/Counter/Counter.tsx#source
<!-- end react -->
</Showcase>


## Counter pill

The pill version of the component with size set to `xl` and colored background. 

<Showcase showcase-name="Counter/CounterPill">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Counter/CounterPill.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Counter/CounterPill.tsx#source
<!-- end react -->
</Showcase>

## Custom background

The pill version of the component with custom background set to `bg-secondary-700` white text and ring.

<Showcase showcase-name="Counter/CounterCustomBackground">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Counter/CounterCustomBackground.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Counter/CounterCustomBackground.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate />

:::

::: slot api
## Props

| Prop name | Type              | Default value | Possible values                       |
|-----------|-------------------|---------------|---------------------------------------|
| size      | `SfCounterSize` | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl` |
| pill      | `Boolean`         | `false`       |                                       |
<!-- react -->
| children  | `ReactNode`       |               |                                       |
| className | `String`          |               |                                       |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| default   | To be filled with counter value |
<!-- end vue -->

:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfCounter/SfCounter.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfCounter/SfCounter.tsx
<!-- end react -->
</SourceCode>
:::
