---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Overlay component

The Overlay is an helper component to other components. It acts as a background for displayed modals, popups, etc.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10966%3A18410)

## Props

| Prop name | Type    | Default value | Possible values |
| --------- | ------- | ------------- | --------------- |
| visible   | Boolean | false         |                 |
| absolute  | Boolean | false         |                 |

### React only:

| Prop name | Type        | Default value | Possible values |
| --------- | ----------- | ------------- | --------------- |
| children  | `ReactNode` |               |                 |
| className | `String`    |               |                 |
| onClick   | `Function`  |               |                 |

## Slots

### Vue only:

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | default slot for optional content |

## Events

### Vue only:

| Event name |           Trigger           |
| ---------- | :-------------------------: |
| click      | emits on component clicking |

## Accessibility notes

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfOverlay/VsfOverlay.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfOverlay/VsfOverlay.tsx
