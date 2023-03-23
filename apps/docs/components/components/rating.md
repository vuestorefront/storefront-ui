---
layout: AtomLayout
hideBreadcrumbs: true
---

# Rating

::: slot usage

`SfRating` gives you a nice way to display a rating both with graphics and through text. This can be used to show the rating of a product, score for a review, or any other rating you might need.

## Examples

### Value handling

The `value` prop allows you to set the current rating and max number of stars via `max` prop. 

If you need to support partial stars, you can show half-filled star icons by passing the `half-increment` prop.

<Showcase showcase-name="Rating/RatingValues">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/RatingValues.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/RatingValues.tsx#source
<!-- end react -->

</Showcase>

### Sizes

`SfRating` supports 6 sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`.

<Showcase showcase-name="Rating/RatingSizes" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/RatingSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/RatingSizes.tsx#source
<!-- end react -->

</Showcase>

### Colors

Rating by default uses a `warning-500` for filled and partially filled stars and `disabled-500` as an empty icon color. You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).


<Showcase showcase-name="Rating/RatingColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/RatingColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/RatingColors.tsx#source
<!-- end react -->

</Showcase>

### Single star with value

For a more minimal look, you can also present ratings a single star icon with a text label.

<Showcase showcase-name="Rating/SingleStar" style="min-height:220px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Rating/SingleStar.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Rating/SingleStar.tsx#source
<!-- end react -->

</Showcase>

## Accessibility notes

For better out-of-the-box accessibility, `SfRating` adds `role="img"` and an `aria-label` property with value `Rating: [Avg value] out of [Max value] stars` where the values are replaced with the actual values. This can be overridden by passing an `aria-label` property to the component.

## Playground

<Generate style="height:400px" />
:::

::: slot api

## Props

| Prop name     | Type                | Default value | Possible values            |
| ------------- | ------------------- | ------------- | -------------------------- |
| `size`          | `SfRatingSize`    | `'base'`        | `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'` |
| `value`         | `number`            | `0`           |                            |
| `max`           | `number`            | `5`           |                            |
| `halfIncrement` | `boolean`           | `false`       |                            |
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfRating/SfRating.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfRating/SfRating.tsx
<!-- end react -->
</SourceCode>
:::
