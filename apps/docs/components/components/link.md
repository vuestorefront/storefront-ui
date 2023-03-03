---
layout: AtomLayout
hideBreadcrumbs: true
description: A link is interactive reference to an internal or external resource.
---
# Link

::: slot usage

{{ $frontmatter.description }}

## Notes

By default link component renders `anchor` HTML element.

## Link variants

Link supports 2 variants that can be set via `variant` prop: `primary`, `secondary`.

<Showcase showcase-name="Link/LinkVariants">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Link/LinkVariants.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Link/LinkVariants.tsx
<!-- end react -->
</Showcase>

## Text sizes

<Showcase showcase-name="Link/TextSizes">

Customize typography settings like for eg. `fontSize` by passing additional CSS classes via `class`/`className` prop.

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Link/TextSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Link/TextSizes.tsx
<!-- end react -->
</Showcase>


<!-- react -->
## Usage with NextJS Link

Link component can be composed together with `NextJS` link component.

<Showcase showcase-name="Link/NextLink">
<<<../../preview/next/pages/showcases/Link/NextLink.tsx
</Showcase>
<!-- end react -->

<!-- vue -->
## Usage with Nuxt Link

Use `tag` prop to render component as `NuxtLink`.

<Showcase showcase-name="Link/NuxtLink">
<<<../../preview/nuxt/pages/showcases/Link/NuxtLink.vue
</Showcase>
<!-- end vue -->


## Playground

<Generate />
:::

::: slot api

| Prop name | Type             | Default value | Possible values    |
| --------- | ---------------- | ------------- | ------------------ |
| variant   | VsfLinkVariant   | primary       | primary, secondary |
<!-- vue -->
| tag | String | a | |
<!-- end vue -->
<!-- react -->
| children | ReactNode | | Default slotted content |
| as | ReactElement | a | any tag name |
<!-- end react -->

<!-- vue -->
| Slot name |         Description          |
| --------- | :--------------------------: |
| default   | replaces the default content |
<!-- end vue -->

:::

::: slot source
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfLink/VsfLink.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfLink/VsfLink.tsx
<!-- end react -->
:::