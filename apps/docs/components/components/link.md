---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Link

A link is interactive reference to an internal or external resource. For external link there is `<a>` tag, and for internal <!-- vue -->
component tags `<NuxtLink>` for Nuxt.js and `<router-link>` for pure Vue.<!-- end vue --><!-- react -->`<Link>` component tag.<!-- end react --> When there is a need to have more link with the same tag then [config](config.html) component can be used to achieve this.

Used to navigate the page and link to external resources (websites and files).

Avoid using links as a ghost buttons. Use a variant of the [Button](button.html) component for this purpose.

<!-- vue -->
> NOTE: By default, if `VsfLink` component detects that it's running in `Nuxt` environment it will render as `NuxtLink`. In pure `Vue` environment though it will render as `RouterLink`. This behaviour can be overridden by using `tag` prop or [`linkTag` config option](./config).
<!-- end vue -->
<!-- react -->
> NOTE: By default, if `VsfLink` component detects that it's running in `Next` environment it will render as `Next/Link`. In pure `React` environment though it will render as  regular `a` element. This behaviour can be overridden by using `tag` prop or [`linkTag` config option](./config).
<!-- end react -->

<Generate />

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
