#  NavBarTopItem component

The NavbarTopItem component can be placed inside NavBarTop component. It can create links for menu or buttons for action items.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11378%3A17321)

## Props
<!-- vue -->

| Prop name | Type      | Default value | Possible values      |
| --------- | --------- | ------------- | ---------------      |
| label     | `String`  |               |                      |
| type      | `String`  | `menu`        | `menu`, `action`     |
| link      | `String`  |               |                      |
| variant   | `String`  |  `default`    |`default`, `branded`  | 
| ariaLabel | `String`  |               |                      |

<!-- end vue -->


<!-- react -->

| Prop name | Type                | Default value | Possible values      |
| --------- | ------------------- | ------------- | ---------------      |
| variant   | `String`        |      `default`   |`default`, `branded`   |  
| label     | `String`            |               |                      |
| ariaLabel | `String`            |               |                      |
| link      | `String`            |               |                      |
| type      | `String`             | `menu`        | `menu`, `action`    |
| className | `String`            |               |                      |
| slotIcon  | `ReactNode`         |               |                      |
| onClick   | `MouseEventHandler` |               |                      |

<!-- end react -->
  

## Slots

<!-- react -->

<!-- end react -->

<!-- vue -->
| Slot name     |            Description                                      |
| ---------     | -------------------------------:                            |
|    logo       |    slot to place logo                                       |
|    menu       |    slot to place custom menu items or VsfNavbarTopItem      |
|    search     |    slot to replace search bar                               |
|    icons      |    slot to place custom action icons or VsfNavbarTopItem    |

<!-- end vue -->


## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfNavbarTop/VsfNavbarTopItem.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopItem.tsx
<!-- end react -->
