---
repoPath: /components/thumbnail.md
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

<<<../../preview/nuxt/pages/showcases/Thumbnail/Sizes.vue
</Showcase>

### Single color

The most simple use case of thumbnail can be achieved by seting a single color with any of Tailwind's background `bg-` property.

<Showcase showcase-name="Thumbnail/Color">

<<<../../preview/nuxt/pages/showcases/Thumbnail/Color.vue
</Showcase>

### Gradient

Gradients can be applied with any of Tailwind's `bg-gradient-` classes.

<Showcase showcase-name="Thumbnail/Gradient">

<<<../../preview/nuxt/pages/showcases/Thumbnail/Gradient.vue
</Showcase>

### Image

You can pass an image into the default slot  to achieve avatar-like look of thumbnail.

<Showcase showcase-name="Thumbnail/Image">

<<<../../preview/nuxt/pages/showcases/Thumbnail/Image.vue
</Showcase>

### Icon

Similar to images, you can also pass an icon into the default slot .

<Showcase showcase-name="Thumbnail/Icon">

<<<../../preview/nuxt/pages/showcases/Thumbnail/Icon.vue
</Showcase>

## Playground 

<Generate style="height: 450px" />

:::

::: slot api

## Props

| Prop name         | Type                       | Default value | Possible values                        |
|------------------ |----------------------------|---------------|----------------------------------------|
| `size`              | `SfChip`                    | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |

## Slots

| Slot name |            Description          |
| --------- | ------------------------------- |
| `default`   |  allows to pass icon or image   |
:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfThumbnail/SfThumbnail.vue
</SourceCode>
:::