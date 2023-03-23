---
layout: AtomLayout
hideBreadcrumbs: true
description: SfProgressCircular is used to provided feedback about the duration and progression of a process to indicate how long a user will be waiting
---
# ProgressCircular

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

It uses `role` set to `progressbar` to [allow screen readers treat it as an indicator of progress status](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role).

## Sizes

ProgressCircular supports various sizes that can be set via `size` prop: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

<Showcase showcase-name="ProgressCircular/ProgressCircularSizes" style="min-height:320px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ProgressCircular/ProgressCircularSizes.tsx#source
<!-- end react -->

</Showcase>

## Customizing color

ProgressCircular by default uses a `primary-700` as animated-shape color (customizable by setting text color) and `neutral-300` as a ring behind. You can easily change these in [tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override on single-element basis using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

<Showcase showcase-name="ProgressCircular/ProgressCircularColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ProgressCircular/ProgressCircularColors.tsx#source
<!-- end react -->

</Showcase>

## With floating label

ProgressCircular might be displayed with a text representation of it's value. To achieve this, provide a content to the component via <!-- react -->`children` prop<!-- end react --><!-- vue -->`default` slot<!-- end vue -->. Remember, ProgressCircular is built upon an `svg`, so your content must be SVG-compatible.

<Showcase showcase-name="ProgressCircular/ProgressCircularFloatingLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularFloatingLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ProgressCircular/ProgressCircularFloatingLabel.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate />
:::

::: slot api
| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  `value`                |  `number`                    | `0`             |                                        |
|  `size`              |  `SfProgressSize` |   `'base'`        |   `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'`  |
|  `ariaLabel`         |  `string`                    |   `'Progress element'`  |                                        |
<!-- react -->
|  `className`            |  `string`                    |               |                                        |
| `children`   | `ReactNode`          |               | Default slotted content            |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| `default`   | adds content within svg element |
<!-- end vue -->
:::
::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfProgressCircular/SfProgressCircular.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfProgressCircular/SfProgressCircular.tsx
<!-- end react -->
</SourceCode>
:::
