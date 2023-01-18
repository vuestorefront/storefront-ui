---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Counter

Counter is a part of other complex components. Informs in numerical (integer) form about the number of elements.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=12426%3A18031&t=LIzxPt9OJb9F1mXf-1)

## Props

| Prop name | Type              | Default value | Possible values                       |
|-----------|-------------------|---------------|---------------------------------------|
| size      | `VsfCounterSize` | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl` |
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
