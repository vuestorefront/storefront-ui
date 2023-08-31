---
layout: AtomLayout
hideBreadcrumbs: true
---
# LoaderCircular

:::::: slot usage

`SfLoaderCircular` is animated loading spinner that can be used to show that some content is loading.

## Examples

### Sizes

`SfLoaderCircular` supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="LoaderCircular/LoaderCircularSizes" style="min-height:320px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderCircular/LoaderCircularSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderCircular/LoaderCircularSizes.tsx#source
<!-- end react -->

</Showcase>

### Customizing colors

By default, `SfLoaderCircular` uses `primary-700` as the animated shape color (customizable by setting text color) and `neutral-300` for the background ring. You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using the [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

::: read-more
Learn more about [overriding default styles](/<!-- vue -->vue<!-- end vue --><!-- react -->react<!-- end react -->/customization/overriding-default-styles) in Storefront UI.
:::

<Showcase showcase-name="LoaderCircular/LoaderCircularColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/LoaderCircular/LoaderCircularColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/LoaderCircular/LoaderCircularColors.tsx#source
<!-- end react -->

</Showcase>

## Accessibility notes

`SfLoaderCircular` uses `aria-live="polite"` to allow screen readers to read the loading status. This can be overriden by passing your own `aria-live` value to the component.

It's important to properly set `aria-label` for screen readers to read proper information while target component is loading. Default value is set to `loading`.


## Playground

<Generate />
::::::

::: slot api

## Props

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
