---
layout: ComponentLayout
hideBreadcrumbs: true
---

# Slider

Slider is a scrollable list with pseudo-pagination.

NOTE: Some of the mobile browsers (e.g. iOS Safari) will hide scrollbar even when `scrollbar` prop is set to `auto`, `always`. Make sure that your website is prepared for such case.

<Generate />

## Props

| Prop name     | Type                  | Default value | Possible values             |
| ------------- | --------------------- | ------------- | --------------------------- |
| scrollbar     | `VsfSliderScrollbar`  | `hidden`      | `always`, `auto`, `hidden`  |
| navigation    | `VsfSliderNavigation` | `block`       | `block`, `floating`, `none` |
| direction     | `VsfSliderDirection`  | `horizontal`  | `horizontal`, `vertical`    |
| scrollSnap    | `boolean`             | `false`       |                             |
| draggable     | `object`              | `undefined`   | `undefined`                 |
| ariaLabelPrev | `string`              | "Previous"    |                             |
| ariaLabelPrev | `string`              | "Next"        |                             |
<!-- react -->
| children | `ReactNode` | | |
| className | `string` | | |
| slotPrevButton | `Function` | | |
| slotNextButton | `Function` | | |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name   | Description                             |
| ----------- | --------------------------------------- |
| default     | default content                         |
| prev-button | scoped slot content for previous button |
| next-button | scoped slot content for next button     |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSlider/VsfSlider.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfSlider/VsfSlider.tsx
<!-- end react -->
