#  NavigationSide component

VsfNavigationSide is surface containing content used for navigating the site, that is anchored to the left or right edge of the screen.


<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=14285%3A49941&t=Geku7ys6n2FJLtVE-4)

## Props



| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  leftSide             |  boolean                   |  true         |                                        |
|  permanent            |  boolean                   |  false        |                                        |
|  overlayVisible       |  boolean                   |  false        |                                        |
|  logoAriaLabel        | `String`                   |  ''           |                                        |
|  logoLink             | `String`                   |  ''           |                                        |
|  modelValue           |  boolean                   |  false        |                                        |







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




## Accessibility notes


## Source code


<<<../../../packages/sfui/frameworks/vue/components/VsfNavigationSide/VsfNavigationSide.vue


