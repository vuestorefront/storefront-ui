---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Navbar Bottom component

The Navbar bottom component is used as navigation on mobile devices. Usually has links to the most common places on a website like homepage.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11378%3A17353)

## Props

| Prop name  | Type      | Default value | Possible values |
| ---------- | --------- | ------------- | --------------- |
| hideLabels | `Boolean` | `false`       |                 |
| filled     | `Boolean` | `false`       |                 |
| absolute   | `Boolean` | `false`       |                 |

### React only:

| Prop name | Type        | Default value | Possible values |
| --------- | ----------- | ------------- | --------------- |
| className | `String`    |               |                 |
| children  | `ReactNode` |               |                 |

## Slots

### Vue only:

| Slot name | Description          |
| --------- | -------------------- |
| default   | default slot content |

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfNavbarBottom/VsfNavbarBottom.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfNavbarBottom/VsfNavbarBottom.tsx
