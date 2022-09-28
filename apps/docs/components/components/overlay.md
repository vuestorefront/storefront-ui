# Overlay component

The Overlay is an helper component to other components. It acts as a background for displayed modals, popups, etc.

<PlaygroundWrapper component="Overlay"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10966%3A18410)

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| visible     | Boolean | false         |                                        |
| absolute    | Boolean | false         |                                        |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | default slot for optional content |


## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| click      | emits on component clicking    |

## Accessibility notes

## Source code

<<<../../mitosis/src/blocks/VsfOverlay/VsfOverlay.lite.tsx
