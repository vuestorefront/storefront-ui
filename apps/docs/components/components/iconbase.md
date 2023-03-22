---
layout: AtomLayout
hideBreadcrumbs: true
description: IconBase component itself gets the icon content data and render it with properly specified `viewBox`, `size`.
---

# IconBase

::: slot usage
{{ $frontmatter.description }}

## Accessibility notes

When using icon without any additional label and/or description, you should specify an `aria-label` on the icon component.

## Notes

StorefrontUI icons are generated with use of `createIcons.js` script and they are based on `IconBase` component.

## Sizes

Icon supports various sizes that can be set via `size` prop: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

<Showcase showcase-name="IconBase/IconBaseSizes" style="min-height:300px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/IconBase/IconBaseSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/IconBase/IconBaseSizes.tsx#source
<!-- end react -->

</Showcase>

## Colors

Icons inherit the text color. So, you can specify it using [Tailwind `text color` classes](https://tailwindcss.com/docs/text-color).

<Showcase showcase-name="IconBase/IconBaseColors">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/IconBase/IconBaseColors.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/IconBase/IconBaseColors.tsx#source
<!-- end react -->

</Showcase>

## List of icons

List of all icons shipped with SFUI2 below. Click on any of the icons to copy its name.

<Showcase showcase-name="IconBase/ListOfIcons"  allow="clipboard-write">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/IconBase/ListOfIcons.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/IconBase/ListOfIcons.tsx#source
<!-- end react -->

</Showcase>

## Custom icon

IconBase component supports displaying of a custom SVG icon. You can pass SVG content <!-- vue -->either via `content` prop or as a default slot<!-- end vue --> <!-- react -->as children<!-- end react -->.

When using icon element with custom icon remember to specify viewBox or width/height attributes for SVG to render correctly.

<Showcase showcase-name="IconBase/CustomIcon">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/IconBase/CustomIcon.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/IconBase/CustomIcon.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate style="height: 380px" />
:::

::: slot api
| Prop name      | Type                                   | Default value | Possible values |
|----------------|----------------------------------------|---------------|-----------------|
<!-- vue -->
| content               | `String` |  |      Content of and SVG, e.g. `<path d='...'/>`           |
<!-- end vue -->
<!-- react -->
| children               | `ReactNode` |  |       Content of an SVG, e.g. `<path d='...'/>`        |
<!-- end react -->
| size                  | `VsfIconSize`                          | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl` |
<!-- vue -->

## Slots

| Slot name | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| default   | Content of an SVF, e.g. `<path d='...'/>`. Takes precedence over `content` prop |
<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfIconBase/VsfIconBase.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfIconBase/VsfIconBase.tsx
<!-- end react -->
</SourceCode>
:::
