# Slider component

Slider is a scrollable list with pseudo-pagination.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=13996%3A24099)

## Props

| Prop name            | Type                  | Default value | Possible values     |
| -------------------- | --------------------- | ------------- | ------------------- |
| scrollbar            | `VsfSliderScrollbar`  | `null`        | `always`, `auto`    |
| navigation           | `VsfSliderNavigation` | `null`        | `block`, `floating` |
| showMobileNavigation | `Boolean`             | `false`       |                     |
| scrollSnap           | `Boolean`             | `false`       |                     |
| draggable            | `Object`              | `null`        |                     |

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
