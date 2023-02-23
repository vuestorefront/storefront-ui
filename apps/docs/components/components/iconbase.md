---
layout: AtomLayout
hideBreadcrumbs: true
description: IconBase component itself gets the icon content data and render it with properly specified `viewBox`, `size`.
---

# IconBase

{{ $frontmatter.description }}

<Generate />

## Notes

StorefrontUI icons are generated vie `createIcons` script and they are based on `IconBase` component

## Props

| Prop name             | Type                                   | Default value | Possible values |
|-----------------------|----------------------------------------|---------------|-----------------|
| content               | String (vue), ReactElement / ReactElement [] (react)|  |                 |
| size                  | `VsfIconSize`                          | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl` |


## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfIconBase/VsfIconBase.vue
<!-- end vue -->

<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfIconBase/VsfIconBase.tsx
<!-- end react -->

