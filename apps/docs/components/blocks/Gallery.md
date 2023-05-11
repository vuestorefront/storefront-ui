---
layout: DefaultLayout
hideBreadcrumbs: true
description: The Gallery presents a visually appealing and user-friendly collection of images that can be conveniently viewed and navigated.
hideToc: true

---
# Gallery

::: warning This is an experimental block
This block has been built on top of experimental base component. The API and structure of it might change based on user feedback.
:::

The Gallery presents a visually appealing and user-friendly collection of images that can be conveniently viewed and navigated. Within the example block, navigation options include "previous/next" arrows and photo thumbnails, providing users with multiple ways to interact with the gallery. These navigation features can be activated through both clicks and hover actions.

The Gallery is primarily intended for use on product pages, where it serves as an effective tool for showcasing product images. The choice between the vertical and horizontal variants should depend on the layout of the product page, ensuring optimal visual presentation. Additionally, the variant with bullets should be considered, particularly for mobile devices, as it offers a compact and easily accessible navigation format.

## Product Gallery with vertical thumbnails

Changing an image is provided by hover on the thumbnail or dragging the main image. There are buttons to scroll thumbnails up and down.

<Showcase showcase-name="Gallery/GalleryVertical" style="min-height:700px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Gallery/GalleryVertical.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Gallery/GalleryVertical.tsx#source
<!-- end react -->

</Showcase>

## Product Gallery with horizontal thumbnails

Changing an image is provided by click on the thumbnail or dragging the main image. You can scroll thumbnails by click on the button.

<Showcase showcase-name="Gallery/GalleryHorizontal" style="min-height:700px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Gallery/GalleryHorizontal.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Gallery/GalleryHorizontal.tsx#source
<!-- end react -->

</Showcase>

## Product Gallery with bullets

Changing an image is provided by click on the buttons which are visible after hovering on the main image. Currently displayed image is highlighted by the bullets below the main image.

<Showcase showcase-name="Gallery/GalleryWithBullets" style="min-height:700px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Gallery/GalleryWithBullets.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Gallery/GalleryWithBullets.tsx#source
<!-- end react -->

</Showcase>

## Accessibility notes

The Gallery supports the use of the keyboard (Tab/alt+Tab) to navigate through images.
