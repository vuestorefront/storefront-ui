# Review component

Customer review component with author, rating, date and review text.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=13969%3A22192)



## Props

|     Prop name      |    Type     | Default value | Possible values |
|:------------------:|:-----------:|:-------------:|:---------------:|
|      `title`       |  `String`   |      ''       |                 |
|     `content`      |  `String`   |      ''       |                 |
|       `date`       |  `String`   |      ''       |                 |
|      `author`      |  `String`   |      ''       |                 |
|   `showMoreText`   |  `String`   |  `Read more`  |                 |
|   `showLessText`   |  `String`   |  `Read less`  |                 |
|    `charLimit`     |  `Number`   |               |                 |
|    `slotRating`    | `ReactNode` |               |                 |
| `slotAuthorSuffix` | `ReactNode` |               |                 |
|   `slotActions`    | `ReactNode` |               |                 |
|    `className`     |  `String`   |               |                 |


## Source code

<<< ../../../packages/sfui/frameworks/react/components/VsfReview/VsfReview.tsx
