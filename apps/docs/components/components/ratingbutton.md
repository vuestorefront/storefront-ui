# RatingButton component

RatingButton is icon-based group component, used for input a numeric value.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=12426%3A17812&t=YXnwqxgQsY2OfyK3-1)

## Props
<!-- vue -->
| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------- |
| `max`          | Number   | 5      |          |
| `size`         | String   | 'base'   | 'xs','sm','base','lg','xl,'2xl'        |
| `disabled`     | Boolean  | false  |          |
| `modelValue`   | Number   |        |          |
| `name`         | String   |        |          |
| `ariaLabel`    | String   |        | you can use `${item}` and `${max}` which dynamically adapt to every item in rating  |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|  `iconFilled` |    slot to replace icon filled    |
|  `iconEmpty`  |   slot to replace icon empty      |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

<!-- end vue -->

<!-- react -->

| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------- |
| `max`          | Number   | 5      |          |
| `size`         | String   | 'base'   | 'xs','sm','base','lg','xl,'2xl'        |
| `disabled`     | Boolean  | false  |          |
| `modelValue`   | Number   |        |          |
| `name`         | String   |        |          |
| `ariaLabel`    | String   |        | you can use `${item}` and `${max}` which dynamically adapt to every item in rating  |
| `renderIconFilled`         | ReactElement   |        |          |
| `renderIconEmpty`         | ReactElement   |        |          |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
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

