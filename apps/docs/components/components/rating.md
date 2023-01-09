---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Rating

The Rating component presents the average grade graphically and textually.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=12426%3A17783&t=LIzxPt9OJb9F1mXf-1)

## Props

| Prop name     | Type                | Default value | Possible values            |
| ------------- | ------------------- | ------------- | -------------------------- |
| size          | `VsfRatingSizes`    | `base`        | `xs`,`sm`,`base`,`lg`,`xl` |
| type          | `VsfRatingVariants` | `base`        | `base`,`withValue`         |
| value         | `Number`            | `0`           |                            |
| max           | `Number`            | `5`           |                            |
| halfIncrement | `Boolean`           | `false`       |                            |

## Accessibility notes

Component implements `role="img"` and `aria-label` property with value `Rating: [Avg value] out of [Max value] stars`.

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfRating/VsfRating.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfRating/VsfRating.tsx
