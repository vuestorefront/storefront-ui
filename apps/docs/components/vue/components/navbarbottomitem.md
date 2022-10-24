# Navbar Bottom Item component

The Navbar bottom component is used as navigation on mobile devices. Usually has links to the most common places on a website like homepage.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11378%3A17353)

## Props

| Prop name | Type      | Default value | Possible values |
| --------- | --------- | ------------- | --------------- |
| label     | `String`  |               |                 |
| active    | `Boolean` | `false`       |                 |
| tag       | `String`  | `button`      | `button`, `a`   |
| link      | `String`  |               |                 |

### React only:

| Prop name | Type                | Default value | Possible values |
| --------- | ------------------- | ------------- | --------------- |
| className | `String`            |               |                 |
| slotIcon  | `ReactNode`         |               |                 |
| onClick   | `MouseEventHandler` |               |                 |

## Slots

### Vue only:

| Slot name | Description       |
| --------- | ----------------- |
| icon      | icon slot content |

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfNavbarBottom/VsfNavbarBottomItem.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfNavbarBottom/VsfNavbarBottomItem.tsx
