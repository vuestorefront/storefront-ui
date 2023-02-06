---
layout: ComponentLayout
hideBreadcrumbs: true
description: Hero component acts like a layout for your hero section. You can provide main image and any content, as well as background images for mobile and desktop devices.
---

# Hero

{{ $frontmatter.description }}

## Notes 

Recommended ratio of the main image is 4:3. Background images should be provided as a vertical version for small screens (up to 769px), and horizontal vesion for large screens.

When you pass an `img` as the media, you should add `vsf-hero-img` class to it. This class will align your main image according to our guidelines.

<Generate />

## Props

| Prop name       | Type               | Default value | Possible values                   |
| --------------- | ------------------ | ------------- | --------------------------------- |
| direction       | `VsfHeroDirection` | `horizontal`  | `horizontal`, `horizontalReverse` |
| bgImgMobileSrc  | `string`           |               |                                   |
| bgImgDesktopSrc | `string`           |               |                                   |
| className       | `string`           |               |                                   |
| style           | `string`           |               |                                   |
<!-- react -->
| slotMedia           | `ReactNode`        |               |                                   |
| children        | `ReactNode`        |               |                                   |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description         |
| --------- | ------------------- |
| media     | Main hero image     |
| default   | Content on the side |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfHero/VsfHero.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfHero/VsfHero.tsx
<!-- end react -->
