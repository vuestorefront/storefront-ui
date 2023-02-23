---
layout: AtomLayout
hideBreadcrumbs: true
description: Counter is a part of other complex components. Informs in numerical (integer) form about the number of elements.
---
# Counter

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name | Type              | Default value | Possible values                       |
|-----------|-------------------|---------------|---------------------------------------|
| size      | `VsfCounterSize` | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl` |
| pill      | `Boolean`         | `false`       |                                       |
<!-- react -->
| children  | `ReactNode`       |               |                                       |
| className | `String`          |               |                                       |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | Counter value                     |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfCounter/VsfCounter.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfCounter/VsfCounter.tsx
<!-- end react -->
