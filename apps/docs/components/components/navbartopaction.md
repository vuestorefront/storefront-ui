---
layout: ComponentLayout
hideBreadcrumbs: true
---
# NavBarTopAction

The NavbarTopAction component is used as navigation inside NavbarTop component. 

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11378%3A17321)


<!-- react -->
## Props

|    Prop name              |    Type          |      Default value    |     Possible values             |
|-----------------------    |----------------- |---------------        |---------------------------------|
| active     | `Boolean`    | `false`          |                 |
| tag        | `String`     | `button`         | `button`, `a`   |
| link       | `String`     |                  |                 |
| ariaLabel  | `String`     |                  |                 |
| icon       | `Boolean`    | `false`          |                 |
| className  | `String`     |                  |                 |
| children   | `ReactNode`  |                  |                 |
| slotIcon   | `ReactNode`  |                  |                 |


<!-- end react -->

<!-- vue -->
## Props

|    Prop name          |    Type          |      Default value    |     Possible values             |
|-----------------------|----------------- |---------------        |---------------------------------|
| active                | `Boolean`        | `false`               |                 |
| tag                   | `String`         | `button`              | `button`, `a`   |
| link                  | `String`         |                       |                 |
| ariaLabel             | `String`         |                       |                 |
| icon                  | `Boolean`        | `false`               |                 |

<!-- end vue -->
<!-- vue -->

## Slots

| Slot name          |            Description                    |
| ---------          | -----------------------------------       |
|    default         |    default slot content                   |  


<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfNavbarTop/VsfNavbarTopAction.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopAction.tsx
<!-- end react -->
