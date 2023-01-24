---
layout: ComponentLayout
hideBreadcrumbs: true
---

# Display

Display component acts like a layout for your banners. You can provide main image and any content. The image will not act as a background, it takes the width of container it is in instead.

Recommended ratio of the main image is square. Only one image can be provided.

<Generate />

## Props

| Prop name       | Type               | Default value | Possible values                   |
| --------------- | ------------------ | ------------- | --------------------------------- |
| direction       | `VsfDisplayDirection` | `horizontal`  | `horizontal`, `horizontalReverse`, `vertical` |
| className       | `string`           |               |                                   |
<!-- react -->
| slotMedia       | `ReactNode`        |               |                                   |
| children        | `ReactNode`        |               |                                   |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description         |
| --------- | ------------------- |
| media     | Main display image     |
| default   | Content on the side |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDisplay/VsfDisplay.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfDisplay/VsfDisplay.tsx
<!-- end react -->
