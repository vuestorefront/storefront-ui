---
layout: AtomLayout
hideBreadcrumbs: true
description: The Overlay is an helper component to other components. It acts as a background for displayed modals, popups, etc.
---
# Overlay

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name | Type    | Default value | Possible values |
| --------- | ------- | ------------- | --------------- |
| visible   | Boolean | false         |                 |
| absolute  | Boolean | false         |                 |
<!-- react -->
| children  | `ReactNode` |               |                 |
| className | `String`    |               |                 |
| onClick   | `Function`  |               |                 |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | default slot for optional content |

## Events

| Event name |           Trigger           |
| ---------- | :-------------------------: |
| click      | emits on component clicking |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfOverlay/VsfOverlay.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfOverlay/VsfOverlay.tsx
<!-- end react -->
