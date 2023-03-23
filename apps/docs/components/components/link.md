---
layout: AtomLayout
hideBreadcrumbs: true
---
# Link

:::::: slot usage

`SfLink` is a component that allows you to create a consistent link style across your application. 

## Examples

### Link variants

`SfLink` supports 2 variants that can be set via `variant` prop: `'primary'`, `'secondary'`. 

<Showcase showcase-name="Link/LinkVariants">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Link/LinkVariants.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Link/LinkVariants.tsx#source
<!-- end react -->
</Showcase>

### Customization

When using the `'secondary'` variant, the text color of the base state is inherited from the parent element.

You can [customize your color palette](../customization/theming.html) as a part of your Tailwind config.

<Showcase showcase-name="Link/Customization">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Link/Customization.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Link/Customization.tsx#source
<!-- end react -->
</Showcase>

::: tip Need more customization?

If you need more customization beyond the built-in variants, we recommend copying the `SfLink` [source code](#source) and modifying it to your needs. This way, you can have all the custom styles for your design system, but still be able to easily use all of our [Blocks](../blocks.html).
:::

<!-- react -->
### Usage with NextJS Link

`SfLink` can be composed together with `NextJS` link component.

<Showcase showcase-name="Link/NextLink">
<<<../../preview/next/pages/showcases/Link/NextLink.tsx#source
</Showcase>
<!-- end react -->

<!-- vue -->
### Usage with Nuxt Link

You can use the `tag` prop to render component as `NuxtLink`.

<Showcase showcase-name="Link/NuxtLink">
<<<../../preview/nuxt/pages/showcases/Link/NuxtLink.vue
</Showcase>
<!-- end vue -->

## Playground

<Generate />
::::::

::: slot api

## Props

| Prop name | Type             | Default value | Possible values    |
| --------- | ---------------- | ------------- | ------------------ |
| `variant`   | `SfLinkVariant`   | `'primary'`       | `'primary'`, `'secondary'` |
<!-- vue -->
| `tag` | `string` | `'a'` | |
<!-- end vue -->
<!-- react -->
| `as` | `ReactElement` | `'a'` | any tag name |
| `children` | `ReactNode` | | Default slotted content |
<!-- end react -->

<!-- vue -->
| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | replaces the default content |
<!-- end vue -->

:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfLink/SfLink.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfLink/SfLink.tsx
<!-- end react -->
</SourceCode>
:::
