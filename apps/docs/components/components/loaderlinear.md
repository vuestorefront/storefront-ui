---
layout: AtomLayout
hideBreadcrumbs: true
description: The LoaderLinear is used when the loading progress can be determined.
---
# LoaderLinear

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

It uses `aria-live` set to `polite` to allow screen reader to read the loading status. It can be changed by adding new value of this attribute to the component when it's used.
It is important to properly set `ariaLabel` for screen readers to read proper information when target component is loading. Default value is set to `loading`.

## Notes

LoaderLinear does not set it's own width by default - have a look at [`Sizes` section for example of usage](#sizes).

## Sizes

LoaderLinear supports various sizes that can be set via `size` prop: `minimal`, `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

<Showcase showcase-name="LoaderLinear/LoaderLinearSizes" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderLinear/LoaderLinearSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderLinear/LoaderLinearSizes.tsx#source
<!-- end react -->

</Showcase>

## Customizing color

LoaderLinear by default uses a `primary-700` as bar color (customizable by setting text color) and `neutral-300` as its background. You can easily change these in [tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override on single-element basis using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

<Showcase showcase-name="LoaderLinear/LoaderLinearColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderLinear/LoaderLinearColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderLinear/LoaderLinearColors.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate />
:::

::: slot api
| Prop name             | Type                       | Default value                 | Possible values                      |
|-----------------------|----------------------------|-------------------------------|--------------------------------------|
| `size`                |      `SfLoaderLinearSize | SfLoaderSize`        | `'base'`           |  `'minimal'`,`'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'` |
| `ariaLabel`    |      `string`                | `'loading'`                     |                                      |
<!-- react -->
| `className`             |  `string`                    |               |                                  |            |
<!-- end react -->
:::
::: slot source
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfLoaderLinear/SfLoaderLinear.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfLoaderLinear/SfLoaderLinear.tsx
<!-- end react -->
:::
