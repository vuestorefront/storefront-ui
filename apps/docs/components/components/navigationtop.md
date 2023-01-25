---
layout: ComponentLayout
hideBreadcrumbs: true
---
# NavigationTop

NavigationTop is placeholder for navigation menu, image blocks etc. It purpose is to help with handling different columns arrangement and showing/hiding whole component.

<Generate />

## Props

| Prop name | Type                      | Default value | Possible values                    |
| --------- | ------------------------- | ------------- | ---------------------------------- |
| variant   | `VsfNavigationTopVariant` | `auto`        | `none`, `auto`, `half-3`, `3-half` |
<!-- react -->
| open      | `boolean`                 | `false`       |                                    |
| onOpenChange | when navigation is show/hide |
<!-- end react -->
<!-- vue -->
| modelValue | `boolean`                 | `false`       |                                    |
<!-- end vue -->

<!-- vue -->
## Slots

| Slot name | Description      |
| --------- | ---------------- |
| default   | columns elements |

## Events

| Event name        | Trigger                      |
| ----------------- | ---------------------------- |
| update:modelValue | when navigation is show/hide |

<!-- end vue -->

## Accessibility notes

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfNavigationTop/VsfNavigationTop.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfNavigationTop/VsfNavigationTop.tsx
<!-- end react -->
