---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Review

Customer review component with author, rating, date and review text.

<Generate style="height: 700px" />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=13969%3A22192)

## Props

|   Prop name    |   Type   | Default value | Possible values |
|:--------------:|:--------:|:-------------:|:---------------:|
|    `title`     | `String` |      ''       |                 |
|   `content`    | `String` |      ''       |                 |
|     `date`     | `String` |      ''       |                 |
|    `author`    | `String` |      ''       |                 |
| `showMoreText` | `String` |  `Read more`  |                 |
| `showLessText` | `String` |  `Read less`  |                 |
|  `charLimit`   | `Number` |               |                 |
<!-- react -->
|    `slotRating`    | `ReactNode` |               |                 |
| `slotAuthorSuffix` | `ReactNode` |               |                 |
|   `slotActions`    | `ReactNode` |               |                 |
|    `className`     |  `String`   |               |                 |
<!-- end react -->
<!-- vue -->
## Slots

|   Slot name    |        Description        |
|:--------------:|:-------------------------:|
|    `rating`    | slot for rating component |
| `authorSuffix` |       slot for icon       |
|   `actions`    |     slot for actions      |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfReview/VsfReview.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfReview/VsfReview.tsx
<!-- end react -->
