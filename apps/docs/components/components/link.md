---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Link component

VsfLink component can be used to create internal as well as external links. For external link there is `a` tag, and for internal
<!-- vue -->
component tags `<NuxtLink>` for Nuxt.js and `<router-link>` for pure Vue.
<!-- end vue -->
<!-- react -->
`<Link>` component tag.
<!-- end react -->

When there is a need to have more link with the same tag then [config](config.html) component can be used to achieve this.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=18519%3A48623&t=iKFrkxIDvwrjNfuY-0)

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
<!-- vue -->
|  tag                 |  `string | NuxtLink | RouterLink`            |   `NuxtLink | RouterLink | a`          |  `a, RouterLink, NuxtLink`                |
|  link                 |  `string | RouteLocationRaw`           |   `undefined`   |                                        |
<!-- end vue -->
<!-- react -->
|  tag                 |  `string | Link`            |   `Link | a`          |  `a, Link`                |
|  link                 |  `string`           |   `undefined`   |                                        |
|  className            |  `string`                    |   `''`          |                                        |
<!-- end react -->
|  variant              |  `string`                    |   `primary`     |  `primary, secondary, none`                    |

<!-- vue -->
## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|  default  | replaces the default content      |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfLink/VsfLink.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfLink/VsfLink.tsx
<!-- end react -->
