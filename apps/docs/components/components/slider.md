---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Slider

Slider is a scrollable list with pseudo-pagination.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=13996%3A24099&t=LIzxPt9OJb9F1mXf-1)

## Props

| Prop name  | Type                  | Default value | Possible values     |
| ---------- | --------------------- | ------------- | ------------------- |
| scrollbar  | `VsfSliderScrollbar`  | `null`        | `always`, `auto`    |
| navigation | `VsfSliderNavigation` | `null`        | `block`, `floating` |
| scrollSnap | `Boolean`             | `false`       |                     |
| draggable  | `Object`              | `null`        |                     |

### React only:

| Prop name     | Type        | Default value | Possible values |
| ------------- | ----------- | ------------- | --------------- |
| children      | `ReactNode` |               |                 |
| className     | `String`    |               |                 |
| slotPrevArrow | `Function`  |               |                 |
| slotNextArrow | `Function`  |               |                 |

## Slots

### Vue only:

| Slot name  |      Description       |
| ---------- | :--------------------: |
| default    |    default content     |
| prev-arrow | prev arrow scoped slot |
| next-arrow | next arrow scoped slot |

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfSlider/VsfSlider.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfSlider/VsfSlider.tsx
