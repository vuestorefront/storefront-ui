---
layout: AtomLayout
hideBreadcrumbs: true
---
# Thumbnail

::: slot usage

`SfThumbnail` is a component that allows the user to display a color, gradient, icon, or image in a thumbnail style. One common use case from our [blocks](../blocks/Filters.html) is using this component as avatar or thumbnail for filters.

## Examples

### Sizes

Thumbnail supports various sizes that can be set with the `size` prop: `'sm'`, `'base'`, `lg ` and `'xl'`

<Showcase showcase-name="Thumbnail/Sizes">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Sizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Sizes.tsx#source
<!-- end react -->
</Showcase>

### Single color

The most simple use case of thumbnail can be achieved by seting a single color with any of Tailwind's background `bg-` property.

<Showcase showcase-name="Thumbnail/Color">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Color.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Color.tsx#source
<!-- end react -->
</Showcase>

### Gradient

Gradients can be applied with any of Tailwind's `bg-gradient-` classes.

<Showcase showcase-name="Thumbnail/Gradient">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Gradient.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Gradient.tsx#source
<!-- end react -->
</Showcase>

### Image

You can pass an image <!-- vue -->into the default slot<!-- end vue --> <!-- react -->as children<!-- end react --> to achieve avatar-like look of thumbnail.

<Showcase showcase-name="Thumbnail/Image">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Image.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Image.tsx#source
<!-- end react -->
</Showcase>

### Icon

Similar to images, you can also pass an icon <!-- vue -->into the default slot<!-- end vue --> <!-- react -->as children<!-- end react -->.

<Showcase showcase-name="Thumbnail/Icon">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Icon.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Icon.tsx#source
<!-- end react -->
</Showcase>

## Playground 

<Generate style="height: 450px" />

:::

::: slot api

## Props

| Prop name         | Type                       | Default value | Possible values                        |
|------------------ |----------------------------|---------------|----------------------------------------|
| `size`              | `SfChip`                    | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
<!-- react -->
| `className`         | `string`                     |               |                                        |
| `children`          | `ReactNode`                  |               |            |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description          |
| --------- | ------------------------------- |
| `default`   |  allows to pass icon or image   |
<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfThumbnail/SfThumbnail.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfThumbnail/SfThumbnail.tsx
<!-- end react -->
</SourceCode>
:::