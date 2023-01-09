---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Card

The Card component contains content and actions that inform about a single subject.

<Generate style="height: 900px" />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=17310%3A45695&t=LIzxPt9OJb9F1mXf-1)

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