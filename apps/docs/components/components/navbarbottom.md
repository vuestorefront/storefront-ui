# Navbar Bottom component

The Navbar bottom component is used as navigation on mobile devices. Usually has links to the most common places on a website like homepage.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11378%3A17353)

## Props

| Prop name             | Type                                            | Default value | Possible values     |
|-----------------------|----------------------------|---------------    |----------------------------------|
| items                 | Array of objects (keys: label, icon, tag, link) | []             |                   |
| withLabels            | Boolean                    | `false`            |                                      |
| variant               | String                     | `primary`      | `primary`, `secondary`                |
| absolutePosition       | Boolean                    | `false`       |                                        |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |

## Events

| Event name |            Trigger             |
| ---------- | ----------------------------  |
| click      | emits on component item clicking (if item is a button)   |


## Source code

<<<../../mitosis/src/blocks/VsfNavbarBottom/VsfNavbarBottom.lite.tsx
