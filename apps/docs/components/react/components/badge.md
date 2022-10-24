# Badge component

The Badge generates a small badge to the top-right of its child.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=16643%3A48728)

## Props

| Prop name | Type               | Default value | Possible values |
| --------- | ------------------ | ------------- | --------------- |
| bordered  | `Boolean`          | `false`       |                 |
| dot       | `Boolean`          | `false`       |                 |
| invisible | `Boolean`          | `false`       |                 |
| value     | `String`, `Number` |               |                 |

### React only:

| Prop name | Type        | Default value | Possible values |
| --------- | ----------- | ------------- | --------------- |
| children  | `ReactNode` |               |                 |
| className | `String`    |               |                 |

## Slots

### Vue only:

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | default slot for optional content |

## Accessibility notes

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfBadge/VsfBadge.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfBadge/VsfBadge.tsx
