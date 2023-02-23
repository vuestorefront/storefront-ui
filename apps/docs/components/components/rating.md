---
layout: AtomLayout
hideBreadcrumbs: true
description: The Rating component presents the average grade graphically and textually.
---
# Rating

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name     | Type                | Default value | Possible values            |
| ------------- | ------------------- | ------------- | -------------------------- |
| size          | `VsfRatingSize`    | `base`        | `xs`,`sm`,`base`,`lg`,`xl` |
| type          | `VsfRatingVariant` | `base`        | `base`,`withValue`         |
| value         | `Number`            | `0`           |                            |
| max           | `Number`            | `5`           |                            |
| halfIncrement | `Boolean`           | `false`       |                            |

## Accessibility notes

Component implements `role="img"` and `aria-label` property with value `Rating: [Avg value] out of [Max value] stars`.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfRating/VsfRating.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfRating/VsfRating.tsx
<!-- end react -->
