#  LoaderLinear component

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10599%3A5933&t=0ffhQFc6oQkTRQKZ-1)

## Props

| Prop name             | Type                       | Default value                 | Possible values                      |
|-----------------------|----------------------------|-------------------------------|--------------------------------------|
| `size`                |      VsfLoaderSizes        | `VsfLoaderSizes.lg`           |  `2xs`,`xs`,`sm`,`base`,`lg`,`xl`,`2xl`,`3xl`,`4xl` |
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
