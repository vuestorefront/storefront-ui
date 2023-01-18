---
layout: ComponentLayout
hideBreadcrumbs: true
---
# LoaderLinear

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=10599%3A5933&t=eAc5joFjkRlZwK2p-0)

## Props

| Prop name             | Type                       | Default value                 | Possible values                      |
|-----------------------|----------------------------|-------------------------------|--------------------------------------|
| `size`                |      VsfLoaderSize        | `VsfLoaderSize.lg`           |  `minimal`,`xs`,`sm`,`base`,`lg`,`xl`,`2xl`,`3xl`,`4xl` |
| `screenReaderText`    |      string                | `loading`                     |                                      |

## Accessibility notes
It uses `aria-live` set to `polite` to allow screen reader to read the loading status. It can be changed by adding new value of this attribute to the component when it's used.
It is important to properly set `screenReaderText` for screen readers to read proper information when target component is loading. Default value is set to `loading`.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfLoaderLinear/VsfLoaderLinear.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfLoaderLinear/VsfLoaderLinear.tsx
<!-- end react -->
