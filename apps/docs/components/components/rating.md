---
layout: AtomLayout
hideBreadcrumbs: true
description: The Rating component presents the average grade graphically and textually.
---

# Rating

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

Component implements `role="img"` and `aria-label` property with value `Rating: [Avg value] out of [Max value] stars`.

## Value handling

Rating allows setting of currently displayed value via `value` prop and max number of start via `max` prop. Value can also be shown as half-filled star icons by using `half-increment` prop.

<Showcase showcase-name="Rating/RatingValues">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/RatingValues.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/RatingValues.tsx#source
<!-- end react -->

</Showcase>

## Sizes

Rating supports various sizes that can be set via `size` prop: `xs`, `sm`, `base`, `lg`, `xl`.

<Showcase showcase-name="Rating/RatingSizes" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/RatingSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/RatingSizes.tsx#source
<!-- end react -->

</Showcase>

## Colors

Rating by default uses a `warning-500` as filled and partially filled star icons color and `disabled-500` as an empty icon color. You can easily change these in [tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override on single-element basis using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

<Showcase showcase-name="Rating/RatingColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/RatingColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/RatingColors.tsx#source
<!-- end react -->

</Showcase>

## Single star with value

Rating could be presented as a simple star icon with value label.

<Showcase showcase-name="Rating/SingleStar" style="min-height:220px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/SingleStar.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/SingleStar.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate style="height:400px" />
:::

::: slot api
| Prop name     | Type                | Default value | Possible values            |
| ------------- | ------------------- | ------------- | -------------------------- |
| size          | `VsfRatingSize`    | `base`        | `xs`,`sm`,`base`,`lg`,`xl` |
| value         | `Number`            | `0`           |                            |
| max           | `Number`            | `5`           |                            |
| halfIncrement | `Boolean`           | `false`       |                            |
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfRating/VsfRating.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfRating/VsfRating.tsx
<!-- end react -->
</SourceCode>
:::
