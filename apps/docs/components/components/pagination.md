---
layout: AtomLayout
hideBreadcrumbs: true
description: Pagination component is a common element to navigate through pages containing many items like products in lists.
---
# Pagination

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name        | Type         | Default value | Possible values      |
|------------------|--------------|---------------|----------------------|
| totalItems     | `number`       | `0`           |                      |
| currentPage    | `number`       | `0`           |                      |
| itemsPerPage   | `number`       | `0`           |                      |
| maxVisiblePages| `number`       | `undefined`   |                      |
| prev           | `string`       | `Previous`    |                      |
| next           | `string`       | `Next`        |                      |
| hideButtonLabels | `boolean`    | `false`       |                      |
<!-- react -->
| slotPrefix     | `ReactNode`    |               |                      |
| slotSuffix     | `ReactNode`    |               |                      |
| children       | `ReactNode`    |               |                      |
| className      | `string`       |               |                      |
| onPageUpdate   | `Function`     |               |                      |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name      |            Description            |
| -------------- | --------------------------------- |
| default      | to replace the middle pages       |
| slotPrefix   | to replace the start page         |
| slotSuffix   | to replace the end page           |

## Events

| Event name              |            Trigger             |
| ----------------------- | ------------------------------ |
| update:current-page   |      click on button           |
<!-- end vue -->

## Accessibility notes

Each item has proper `aria-label` property added and `aria-current` for the page that is currently opened.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfPagination/VsfPagination.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfPagination/VsfPagination.tsx
<!-- end react -->
