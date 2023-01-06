---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Card

The Card component contains content and actions that inform about a single subject.

<Generate style="height: 900px" />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=17358%3A48256)

### Props:
| Prop name   | Type      | Default value | Possible values                        |
| ----------- |-----------| ------------- | -------------------------------------- |
<!-- react -->
| className   | string    |             |                                          |                                        
| slotImg     | ReactNode |             |                                          |                                        
<!-- end react -->
| title       | string    |             |                                          |
| description       | string    |             |                                          |
| size      | `VsfCardSizes`    | `base`        | `sm`, `base`, `responsive`                 |
| link      | `String`            |               | `/my-cool-page`                    |
| imgSrc  | `String`           |               |                                    |
| imgAlt      | `String`           |               |                                    |
| imgLoading   | `VsfCardImgLoadingValues`           |  `lazy`, `eager`             |  `lazy` `eager`          |
| rounded     | `Boolean`           |     `false`          |                                    |

<!-- vue -->
## Slots

| Slot name     |            Description                                     |
| ------------- | :--------------------------------------------------------: |
| `image`       | replaces product image                                     |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfCard/VsfCard.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfCard/VsfCard.tsx
<!-- end react -->