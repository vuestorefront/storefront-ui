---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Config component

VsfConfig is global configuration component. It can be used when there is a need to use one setting for multiple components e.g `linkTag` for all [link](link.html) component at once, without doing it via prop every time.

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
<!-- vue -->
|  linkTag                 |  `string | typeof NuxtLink | typeof RouterLink`            |   `NuxtLink | RouterLink | a`          |  `a, RouterLink, NuxtLink`                |
<!-- end vue -->
<!-- react -->
|  linkTag                 |  `string | typeof Link`            |   `Link | a`          |  `a, Link`                |
<!-- end react -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfConfig/VsfConfig.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfConfig/VsfConfig.tsx
<!-- end react -->
