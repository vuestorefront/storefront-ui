# RatingButton component

RatingButton is icon-based group component, used for input a numeric value. 

<PlaygroundWrapper component="RatingButton"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11361%3A14930)

## Props

| Prop name    | Type     | Default value | Possible values                        |
| ------------ | -------- | ------------- | -------------------------------------- |
| max          | Number   | 5             |                                        |
| size         | String   | 'base'        | 'xs','sm','base','lg','xl,'2xl'        |
| disabled     | Boolean  | false         |                                        |
| modelValue   | Number   |               |                                        |
| name         | String   |               |                                        |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|           |                                   |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| rating-changed    | star rating select             |
| update:modelValue | triggers v-model update event  |

## Accessibility notes

Component uses `aria-label` attributes to describe selected input.

## Source code

<<<../../mitosis/src/blocks/VsfRatingButton/VsfRatingButton.lite.tsx
