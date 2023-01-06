---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Counter

Counter is a part of other complex components. Informs in numerical (integer) form about the number of elements.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=9533%3A21245)

## Props

| Prop name | Type              | Default value | Possible values                       |
|-----------|-------------------|---------------|---------------------------------------|
| size      | `VsfCounterSizes` | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl` |
| pill      | `Boolean`         | `false`       |                                       |

### React only:

| Prop name | Type              | Default value | Possible values                       |
|-----------|-------------------|---------------|---------------------------------------|
| children  | `ReactNode`       |               |                                       |
| className | `String`          |               |                                       |

## Slots

### Vue only:

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | Counter value                     |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
|            |                                |

## Accessibility notes


## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfCounter/VsfCounter.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfCounter/VsfCounter.tsx