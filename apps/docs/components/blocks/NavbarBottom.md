---
layout: DefaultLayout
hideBreadcrumbs: true
description: NavbarBottom block is the navigation element used in mobile view.
hideToc: true
---
# NavbarBottom

{{ $frontmatter.description }}

::: tip You can make the navbar items links
Each item in the navbar is an [`SfButton`](../components/button) component. This means that you can make each item a link by using the <!-- react -->`as`<!-- end react --><!-- vue -->`tag`<!-- end vue --> prop to make it an `a`, <!-- react -->`NextLink`<!-- end react --><!-- vue -->`NuxtLink`<!-- end vue -->, or any other element/component. [Learn more about this usage in the component documentation.](../components/button#link-as-a-button)

<!-- react -->
```html
<SfButton as="a" href="#">
  Will render as an anchor tag
</SfButton>
```
<!-- end react -->
<!-- vue -->
```html
<SfButton tag="a" href="#">
  Will render as an anchor tag
</SfButton>
```
<!-- end vue -->

:::


## NavbarBottom with white background

<Showcase showcase-name="NavbarBottom/NavbarBottom" no-paddings style="min-height:200px">

<!-- react -->
<<<../../preview/next/pages/showcases/NavbarBottom/NavbarBottom.tsx#source
<!-- end react -->
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/NavbarBottom/NavbarBottom.vue
<!-- end vue -->

</Showcase>

## NavbarBottom with filled background

<Showcase showcase-name="NavbarBottom/NavbarBottomFilled" no-paddings style="min-height:200px">

<!-- react -->
<<<../../preview/next/pages/showcases/NavbarBottom/NavbarBottomFilled.tsx#source
<!-- end react -->
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/NavbarBottom/NavbarBottomFilled.vue
<!-- end vue -->

</Showcase>
