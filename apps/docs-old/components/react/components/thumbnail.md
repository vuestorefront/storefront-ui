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

<<<../../preview/next/pages/showcases/Thumbnail/Sizes.tsx#source
</Showcase>

### Single color

The most simple use case of thumbnail can be achieved by seting a single color with any of Tailwind's background `bg-` property.

<Showcase showcase-name="Thumbnail/Color">

<<<../../preview/next/pages/showcases/Thumbnail/Color.tsx#source
</Showcase>

### Gradient

Gradients can be applied with any of Tailwind's `bg-gradient-` classes.

<Showcase showcase-name="Thumbnail/Gradient">

<<<../../preview/next/pages/showcases/Thumbnail/Gradient.tsx#source
</Showcase>

### Image

You can pass an image  as children to achieve avatar-like look of thumbnail.

<Showcase showcase-name="Thumbnail/Image">

<<<../../preview/next/pages/showcases/Thumbnail/Image.tsx#source
</Showcase>

### Icon

Similar to images, you can also pass an icon  as children.

<Showcase showcase-name="Thumbnail/Icon">

<<<../../preview/next/pages/showcases/Thumbnail/Icon.tsx#source
</Showcase>

## Playground 

<Generate style="height: 450px" />

:::

::: slot api

## Props

| Prop name         | Type                       | Default value | Possible values                        |
|------------------ |----------------------------|---------------|----------------------------------------|
| `size`              | `SfChip`                    | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `className`         | `string`                     |               |                                        |
| `children`          | `ReactNode`                  |               |            |

:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/react/components/SfThumbnail/SfThumbnail.tsx
</SourceCode>
:::