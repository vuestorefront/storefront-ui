---
layout: AtomLayout
hideBreadcrumbs: true
description: The LoaderCircular is used when the loading progress can be determined.
---
# LoaderCircular

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

It uses `aria-live` set to `polite` to allow screen reader to read the loading status. It can be changed by adding new value of this attribute to the component when it's used.
It is important to properly set `screenReaderText` for screen readers to read proper information when target component is loading. Default value is set to `loading`.

## Sizes

LoaderCircular supports various sizes that can be set via `size` prop: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

<Showcase showcase-name="LoaderCircular/LoaderCircularSizes" style="min-height:320px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderCircular/LoaderCircularSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderCircular/LoaderCircularSizes.tsx#source
<!-- end react -->

</Showcase>

## Customizing color

LoaderCircular by default uses a `primary-700` as animated-shape color (customizable by setting text color) and `neutral-300` as a ring behind. You can easily change these in [tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override on single-element basis using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

<Showcase showcase-name="LoaderCircular/LoaderCircularColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderCircular/LoaderCircularColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderCircular/LoaderCircularColors.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate />
:::

::: slot api
| Prop name             | Type                       | Default value                 | Possible values                      |
|-----------------------|----------------------------|-------------------------------|--------------------------------------|
| `size`                |      `SfLoaderSize`        | `'base'`           | `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'` |
| `ariaLabel`    |      `string`                | `'loading'`                     |                                      |
<!-- react -->
| `className`             |  `string`                    |               |                                  |            |
<!-- end react -->
:::
::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfLoaderCircular/SfLoaderCircular.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfLoaderCircular/SfLoaderCircular.tsx
<!-- end react -->
</SourceCode>
:::
