---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Card

The Card component contains content and actions that inform about a single subject.

<Generate style="height: 900px" />

## Props:

| Prop name   | Type      | Default value | Possible values                        |
| ----------- |-----------| ------------- | -------------------------------------- |
<!-- react -->
| className   | string    |             |                                          |
| slotImg     | ReactNode |             |                                          |
<!-- end react -->
| title       | string    |             |                                          |
| description       | string    |             |                                          |
| size      | `VsfCardSize`    | `base`        | `sm`, `base`, `responsive`                 |
| link      | `String`            |               | `/my-cool-page`                    |
| imgSrc  | `String`           |               |                                    |
| imgAlt      | `String`           |               |                                    |
| imgLoading   | `VsfCardImgLoadingValues`           |  `lazy`, `eager`             |  `lazy` `eager`          |

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
