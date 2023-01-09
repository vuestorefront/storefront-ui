---
layout: ComponentLayout
hideBreadcrumbs: true
---
# NavigationSide

VsfNavigationSide is surface containing content used for navigating the site, that is anchored to the left or right edge of the screen.

<Generate style="height: 700px" />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=14285%3A49941&t=LIzxPt9OJb9F1mXf-1)

## Props

<!-- vue -->

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  leftSide             |  boolean                   |  true         |                                        |
|  permanent            |  boolean                   |  false        |                                        |
|  overlayVisible       |  boolean                   |  false        |                                        |
|  logoAriaLabel        | `String`                   |  ''           |                                        |
|  closeAriaLabel       | `String`                   |  ''           |                                        |
|  logoLink             | `String`                   |  ''           |                                        |
|  modelValue           |  boolean                   |  false        |                                        |


<!-- end vue -->

<!-- react -->

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  leftSide             |  boolean                   |  true         |                                        |
|  permanent            |  boolean                   |  false        |                                        |
|  overlayVisible       |  boolean                   |  false        |                                        |
|  open                 |  boolean                   |  false        |                                        |
|  logoAriaLabel        | `String`                   |  ''           |                                        |
|  closeAriaLabel       | `String`                   |  ''           |                                        |
|  logoLink             | `String`                   |  ''           |                                        |
|  children             |  ReactNode                 |               |                                        |
|  slotNavigation       |  ReactNode                 |               |                                        |
|  slotBanner           |  ReactNode                 |               |                                        |
|  className            |  String                    |               |                                        |
|  onOpenChange         |  Function                  |               |                                        |

<!-- end react -->

<!-- vue -->
## Slots

| Slot name       |            Description            |
| ---------       | :-------------------------------: |
|  navigation     |  place content of NavBarTop       |
|  default        |  place content of navigation side, such as Accordion menu   |
|  banner         |  place content of banner section  |


## Events

| Event name |            Trigger               |
| ---------- | :----------------------------:   |
|  update:modelValue |  emits on clicking close button  |

<!-- end vue -->


## Accessibility notes


## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfNavigationSide/VsfNavigationSide.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfNavigationSide/VsfNavigationSide.tsx
<!-- end react -->
