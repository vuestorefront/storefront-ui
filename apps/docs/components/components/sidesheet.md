---
layout: ComponentLayout
hideBreadcrumbs: true
---
# SideSheet

VsfSideSheet is surface containing supplementary content that is anchored to the left or right edge of the screen.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=11318%3A15557&t=LIzxPt9OJb9F1mXf-1)

## Props

<!-- vue -->

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  leftSide             |  boolean                   |  true         |                                        |
|  permanent            |  boolean                   |  false        |                                        |
|  overlayVisible       |  boolean                   |  false        |                                        |
|  open                 |  boolean                   |  false        |                                        |


<!-- end vue -->

<!-- react -->

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  leftSide             |  boolean                   |  true         |                                        |
|  permanent            |  boolean                   |  false        |                                        |
|  overlayVisible       |  boolean                   |  false        |                                        |
|  open                 |  boolean                   |  false        |                                        |
|  children             |  ReactNode                 |               |                                        |
|  className            |  String                    |               |                                        |
|  onOpenChange         |  Function                  |               |                                        |

<!-- end react -->

<!-- vue -->
## Slots

| Slot name       |            Description            |
| ---------       | :-------------------------------: |
|  default        |  place content of side sheet      |


## Events

| Event name |            Trigger               |
| ---------- | :----------------------------:   |
|  close     |  emits on clicking close button  |

<!-- end vue -->


## Accessibility notes


## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSideSheet/VsfSideSheet.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfSideSheet/VsfSideSheet.tsx
<!-- end react -->
