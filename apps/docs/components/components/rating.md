# Rating component

The Rating component presents the average grade graphically and textually.

<PlaygroundWrapper component="Rating"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10745%3A9627)

## Props

| Prop name     | Type      | Default value | Possible values            |
| ------------- | --------- | ------------- | -------------------------- |
| size          | `String`  | `base`        | `xs`,`sm`,`base`,`lg`,`xl` |
| type          | `String`  | `base`        | `base`,`withValue`         |
| value         | `Number`  | 0             |                            |
| max           | `Number`  | 5             |                            |
| count         | `Number`  | 0             |                            |
| halfIncrement | `Boolean` | false         |                            |

## Accessibility notes

Component implements `role="img"` and `aria-label` property with value `Rating: [Avg value] out of [Max value] stars`.

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfRating/VsfRating.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfRating/VsfRating.tsx
