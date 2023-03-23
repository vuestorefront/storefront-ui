---
layout: AtomLayout
hideBreadcrumbs: true
---
# LoaderLinear

:::::: slot usage
`SfLoaderLinear` is animated loading spinner that can be used to show that some content is loading.

## Examples

### Sizes

`SfLoaderLinear` does not set it's own width by default, however you can control its height with the `size` prop. Possible values are `minimal`, `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="LoaderLinear/LoaderLinearSizes" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderLinear/LoaderLinearSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderLinear/LoaderLinearSizes.tsx#source
<!-- end react -->

</Showcase>

### Customizing colors

By default, `SfLoaderLinear` uses `primary-700` as the color of the bar (customizable by setting text color) and `neutral-300` as its background. You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

::: read-more
Learn more about [overriding default styles](/<!-- vue -->vue<!-- end vue --><!-- react -->react<!-- end react -->/customization/overriding-default-styles) in Storefront UI.
:::


<Showcase showcase-name="LoaderLinear/LoaderLinearColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderLinear/LoaderLinearColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderLinear/LoaderLinearColors.tsx#source
<!-- end react -->

</Showcase>

## Accessibility notes

`SfLoaderLinear` uses `aria-live="polite"` to allow screen readers to read the loading status. This can be overriden by passing your own `aria-live` value to the component.

It's important to properly set `aria-label` for screen readers to read proper information while target component is loading. Default value is set to `loading`.

## Playground

<Generate />
::::::

::: slot api

## Props

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
