---
layout: AtomLayout
hideBreadcrumbs: true
description: Thumbnail is a component that allows the user to pass in an custom icon/image or to pass a color/color gradient. It can be used as avatar or thumbnail for filters.
---
# Thumbnail

::: slot usage

{{ $frontmatter.description }}

## Notes
<!-- TODO: add link to ChipListItemFilter.md when it's implemented -->
Thumbnail is a UI component that can be used an avatar or thumbnail e.g within [Chip](chip.md)

## Sizes

Thumbnail supports various sizes that can be set via `size` prop: `sm`, `base`, `lg ` and `xl`

<Showcase showcase-name="Thumbnail/Sizes">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Sizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Sizes.tsx#source
<!-- end react -->
</Showcase>

## Single color

The most simple use case of thumbnail can be achieved by seting a single color with tailwind background `bg-` property.

<Showcase showcase-name="Thumbnail/Color">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Color.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Color.tsx#source
<!-- end react -->
</Showcase>

## Gradient

Gradient colour can be applied with tailwind `bg-gradient-` classes.

<Showcase showcase-name="Thumbnail/Gradient">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Gradient.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Gradient.tsx#source
<!-- end react -->
</Showcase>

## Image

To achieve avatar-like look of Thumbnail, image must placed into the default slot of component. 

<Showcase showcase-name="Thumbnail/Image">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Thumbnail/Image.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Thumbnail/Image.tsx#source
<!-- end react -->
</Showcase>

## Icon

Icons can be applied by placing into the default slot of component. 

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
| size              | SfChip                    | base          | sm, base, lg                           |
<!-- react -->
| children          | ReactNode                  |               |  allows to pass icon or image          |
| className         | string                     |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description          |
| --------- | ------------------------------- |
| default   |  allows to pass icon or image   |
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