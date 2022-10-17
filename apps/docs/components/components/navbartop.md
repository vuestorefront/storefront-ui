#  NavBarTop component

The NavbarTop component is used as navigation. Usually it's at the top of a page and has elements like company logo, links to main categories or a menu button, search input and action buttons that can open a cart, wishlist or login modal.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11378%3A17321)

## Props

|    Prop name          |    Type          |      Default value    |     Possible values             |
|-----------------------|----------------- |---------------        |---------------------------------|
| variant               |      string      |  'default', branded'  |                                 |
| searchDisabled        |      boolean     |    false              |                                 |
| searchValue           |      string      |    ''                 |                                 |
| searchAutocomplete    |      string      |    false              |                                 |


## Slots

<!-- react -->

| Slot name          |            Description                                             |
| ---------          | -----------------------------------                                |
|   slotLogo         |    slot to place logo                                              |  
|   slotMenu         |    slot to place custom menu items or VsfNavbarTopItem component   |
|   slotActions      |    slot to place custom action icons or VsfNavbarTopItem component |
|   slotMenuButton   |    slot to place custom menu button or VsfNavbarTopItem component  |


<!-- end react -->

<!-- vue -->
| Slot name          |            Description                                             |
| ---------          | -----------------------------------                                |
|    logo            |    slot to place logo                                              |  
|    menu            |    slot to place custom menu items or VsfNavbarTopItem component   |
|    search          |    slot to replace search bar                                      |
|    icons           |    slot to place custom action icons or VsfNavbarTopItem component |
|    menuButton      |    slot to place custom action icons or VsfNavbarTopItem component |

<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfNavbarTop/VsfNavbarTop.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTop.tsx
<!-- end react -->
