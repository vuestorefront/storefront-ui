---
layout: ComponentLayout
hideBreadcrumbs: true
---
# RatingButton

RatingButton is icon-based group component, used for input a numeric value.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=12426%3A17812&t=LIzxPt9OJb9F1mXf-1)

## Props
| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------- |
<!-- vue -->
| `modelValue`   | Number   | `0`  |          |
<!-- end vue -->
<!-- react -->
| `value`   | Number   | `0`  |          |
<!-- end react -->
| `max`          | Number   | `5`      |          |
| `size`         | VsfRatingButtonSize   | `"base"`   | 'xs','sm','base','lg','xl,'2xl'        |
| `disabled`     | Boolean  | `false`  |          |
| `name`         | String   |        |          |
| `ariaLabel`    | String   |        | you can use `${item}` and `${max}` which dynamically adapt to every item in rating  |
<!-- react -->
| `renderIconFilled`         | ReactElement   |        |          |
| `renderIconEmpty`         | ReactElement   |        |          |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|  `iconFilled` |    slot to replace icon filled    |
|  `iconEmpty`  |   slot to replace icon empty      |

<!-- end vue -->
## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
<!-- vue -->
| update:modelValue | triggers v-model update event  |
<!-- end vue -->
<!-- react -->
| onChange   | on click the rating item           |
<!-- end react -->

## Accessibility notes

Component uses `aria-label` attributes to describe all rating items. Tha value can be changed by `ariaLabel` prop.

## Source code
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfRatingButton/VsfRatingButton.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfRatingButton/VsfRatingButton.tsx
<!-- end react -->

