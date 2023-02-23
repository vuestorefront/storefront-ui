---
layout: AtomLayout
hideBreadcrumbs: true
description: Scrollable is a scrollable list with pseudo-pagination.
---
# Scrollable

{{ $frontmatter.description }}

<Generate />

## Notes

NOTE: Some of the mobile browsers (e.g. iOS Safari) will hide scrollbar even when `scrollbar` prop is set to `auto`, `always`. Make sure that your website is prepared for such case.
## Props

| Prop name     | Type                  | Default value | Possible values             |
| ------------- | --------------------- | ------------- | --------------------------- |
| scrollbar     | `VsfScrollableScrollbar`  | `hidden`      | `always`, `auto`, `hidden`  |
| navigation    | `VsfScrollableNavigation` | `block`       | `block`, `floating`, `none` |
| direction     | `VsfScrollableDirection`  | `horizontal`  | `horizontal`, `vertical`    |
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

When using Arrow `left` and `right` focus is bound within Scrollable and looking for group `data-group` attribute.
However when cycle with `Tab`/`Tab + Shift` then `focus` will be able to move outside Scrollable component.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfScrollable/VsfScrollable.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfScrollable/VsfScrollable.tsx
<!-- end react -->
