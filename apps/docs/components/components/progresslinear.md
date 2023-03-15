---
layout: AtomLayout
hideBreadcrumbs: true
description: VsfProgressLinear is used to provides feedback about the duration and progression of a process to indicate how long a user will be waiting
---
# ProgressLinear

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

ProgressLinear uses [native `<progress>` HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) to [allow screen readers treat it as an indicator of progress status](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role).

## Notes

LoaderLinear does not set it's own width by default - have a look at [`Sizes` section for example of usage](#sizes).

## Sizes

ProgressLinear supports various sizes that can be set via `size` prop: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

<Showcase showcase-name="ProgressLinear/ProgressLinearSizes" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ProgressLinear/ProgressLinearSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ProgressLinear/ProgressLinearSizes.tsx
<!-- end react -->

</Showcase>

## Customizing color

ProgressLinear by default uses a `primary-700` as animated-shape color (customizable by setting text color) and `neutral-300` as a background behind. You can easily change these in [tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override on single-element basis using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

<Showcase showcase-name="ProgressLinear/ProgressLinearColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ProgressLinear/ProgressLinearColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ProgressLinear/ProgressLinearColors.tsx
<!-- end react -->

</Showcase>

## With label

ProgressLinear should be displayed with an accessible text label. You achieve this for example: by using `ariaLabel` prop or by nesting ProgressLinear withing `<label>` tag with text content.

<Showcase showcase-name="ProgressLinear/ProgressLinearLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ProgressLinear/ProgressLinearLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ProgressLinear/ProgressLinearLabel.tsx
<!-- end react -->

</Showcase>

## Playground

<Generate />
:::

::: slot api
| Prop name             | Type                       | Default value | Possible values                              |
|-----------------------|----------------------------|---------------|----------------------------------------      |
|  value                |  `number`                    | 0 0            |                                        |
| size                |      `VsfProgressLinearSize | VsfProgressSize`        | `VsfProgressSize.base`           |  `minimal`,`xs`,`sm`,`base`,`lg`,`xl`,`2xl`,`3xl`,`4xl` |
| ariaLabel    |      `string`                | `Progress linear`                     |                                      |
<!-- react -->
| className             |  String                    |               |                                  |            |
<!-- end react -->
:::
::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfProgressLinear/VsfProgressLinear.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfProgressLinear/VsfProgressLinear.tsx
<!-- end react -->
</SourceCode>
:::
