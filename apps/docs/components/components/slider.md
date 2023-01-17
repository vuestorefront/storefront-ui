---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Slider

Slider is a scrollable list with pseudo-pagination.

<Generate />

## Props

| Prop name | Type      | Default value | Possible values |
| --------- | --------- | ------------- | --------------- |
| scrollbar  | `VsfSliderScrollbar`  | `hidden`        | `always`, `auto`, `hidden`    |
| navigation | `VsfSliderNavigation` | `block`        | `block`, `floating`, `none` |
| direction | `VsfSliderDirection` | `horizontal`        | `horizontal`, `vertical` |
| scrollSnap | `boolean`             | `false`       |                     |
| draggable | `object | undefined`   | `undefined`       |                     |
<!-- react -->
| children      | `ReactNode` |               |                 |
| className     | `string`    |               |                 |
| slotPrevButton | `Function`  |               |                 |
| slotNextButton | `Function`  |               |                 |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description       |
| --------- | ----------------- |
| default    |    default content     |
| prev-button | scoped slot content for previous button |
| next-button | scoped slot content for next button |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSlider/VsfSlider.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfSlider/VsfSlider.tsx
<!-- end react -->
