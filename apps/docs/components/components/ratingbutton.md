---
layout: AtomLayout
hideBreadcrumbs: true
---

# RatingButton

The RatingButton component is an interactive input element specifically designed for evaluations on product pages. It provides users with the ability to select a rating by choosing an icon using either the cursor or keyboard input. The number of icons displayed and the actual icon used can be customized based on your specific requirements. The rating scale within the component operates from left to right.

::: slot usage

## Examples

### Basic usage

To make the RatingButton work you just have to provide a state.

<Showcase showcase-name="RatingButton/Basic" style="min-height:250px">
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/RatingButton/Basic.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/RatingButton/Basic.tsx#source
<!-- end react -->
</Showcase>

### Sizes

RatingButton comes with three different sizes which are compatible with StorefrontUI icons. Size of the RatingButton maps to the icon size as follows:

- `SfRatingButtonSize.sm` -> `SfIconSize.base`
- `SfRatingButtonSize.base` -> `SfIconSize.lg`
- `SfRatingButtonSize.lg` -> `SfIconSize.xl`

<Showcase showcase-name="RatingButton/Sizes" style="min-height:250px">
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/RatingButton/Sizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/RatingButton/Sizes.tsx#source
<!-- end react -->
</Showcase>

### Adjust maximum rating score value

Set any number of stars using `max` prop. For example, if you increase the maximum rating score to 10, the component will dynamically generate ten buttons, giving users a wider range of options to rate their experience.

<Showcase showcase-name="RatingButton/MaxNumber" style="min-height:250px">
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/RatingButton/MaxNumber.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/RatingButton/MaxNumber.tsx#source
<!-- end react -->
</Showcase>

### Custom icon

You can customize an icon of the RatingButton using
<!-- react -->
 render function.
<!-- end react -->
<!-- vue -->
 scoped slot.
<!-- end vue -->
 It passes some usefull props that you can use to manage your custom icons.

<Showcase showcase-name="RatingButton/CustomIcon" style="min-height:250px">
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/RatingButton/CustomIcon.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/RatingButton/CustomIcon.tsx#source
<!-- end react -->
</Showcase>

## Accessibility notes

RatingButton follows [WAI-ARIA guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio-rating/) for rating radio groups.

The outer wrapper element is `<fieldset>`. You can set a corrsponding `<legend>` using `label` prop.

The RatingButton uses hidden radio input elements to satisfy all keyboard functional requirements. Each input element has corresponding label that reflects selected value. By default it says "stars", so make sure you change it when using custom icons. You can change each icon label using `getLabelText` prop.

## Playground

<Generate style="height:400px" />

:::

::: slot api

## Props

| Prop name        | Type                                              | Default value      | Possible values    |
| ---------------- | ------------------------------------------------- | ------------------ | ------------------ |
<!-- react -->
| `value`          | `number`                                          | `0`                |                    |
| `onChange`       | `(value: number) => void`                         |                    |                    |
<!-- end react -->
| `name`           | `string`                                          | `sf-rating-button` |                    |
| `max`            | `number`                                          | `5`                |                    |
| `size`           | `SfRatingButtonSize`                              | `base`             | `sm`, `base`, `lg` |
| `disabled`       | `boolean`                                         | `false`            |                    |
| `label`          | `string`                                          | `Rating`           |                    |
| `labelClassName` | `string`                                          | `Rating`           |                    |
| `getLabelText`   | `(value: number) => string`                       |                    |                    |
<!-- react -->
| `children`       | `(state: SfRatingButtonRenderProps) => ReactNode` |                    |                    |
<!-- end react -->

<!-- react -->

## Render function props

SfRatingButtonRenderProps

| Prop name  | Type                 | Default value | Possible values    |
| ---------- | -------------------- | ------------- | ------------------ |
| `isFilled` | `boolean`            |               |                    |
| `max`      | `number`             |               |                    |
| `iconSize` | `SfIconSize`         |               | `base`, `lg`, `xl` |

<!-- end react -->

<!-- vue -->

## Slots

| Slot name | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `default` | Scoped slot of a single icon to be rendered when iteraing all the icons. |

### Slot props

| Prop name  | Type                 | Default value | Possible values    |
| ---------- | -------------------- | ------------- | ------------------ |
| `isFilled` | `boolean`            |               |                    |
| `max`      | `number`             |               |                    |
| `iconSize` | `SfIconSize`         |               | `base`, `lg`, `xl` |

## Events

| Event name          | Trigger                       |
| ------------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

<!-- end vue -->

:::

## Source code

::: slot source

<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfRatingButton/SfRatingButton.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfRatingButton/SfRatingButton.tsx
<!-- end react -->
</SourceCode>

:::
