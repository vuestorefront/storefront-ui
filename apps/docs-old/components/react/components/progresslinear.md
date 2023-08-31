---
repoPath: /components/progresslinear.md
layout: AtomLayout
hideBreadcrumbs: true
---
# ProgressLinear

:::::: slot usage

`SfProgressLinear` provides feedback about the duration and progression of a process.

## Examples

### Sizes

`SfProgressLinear` does not set it's own width by default, however you can control its height with the `size` prop. Possible values are `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="ProgressLinear/ProgressLinearSizes" style="min-height:300px">

<<<../../preview/next/pages/showcases/ProgressLinear/ProgressLinearSizes.tsx#source

</Showcase>

### Customizing colors

By default, `SfProgressLinear` uses `primary-700` as the color of the bar (customizable by setting text color) and `neutral-300` as its background. You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

::: read-more
Learn more about [overriding default styles](/react/customization/overriding-default-styles) in Storefront UI.
:::

<Showcase showcase-name="ProgressLinear/ProgressLinearColors">

<<<../../preview/next/pages/showcases/ProgressLinear/ProgressLinearColors.tsx#source

</Showcase>

### With label

`SfProgressLinear` should be displayed with an accessible text label. You achieve this for example: by using `ariaLabel` prop or by nesting the component inside a `<label>` with text content.

<Showcase showcase-name="ProgressLinear/ProgressLinearLabel">

<<<../../preview/next/pages/showcases/ProgressLinear/ProgressLinearLabel.tsx#source

</Showcase>

## Accessibility notes

ProgressLinear uses native [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) HTMLElement] to [allow screen readers treat it as an indicator of [progress status](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role).

## Playground

<Generate />
::::::

::: slot api

## Props

| Prop name             | Type                       | Default value | Possible values                              |
|-----------------------|----------------------------|---------------|----------------------------------------      |
|  `value`                |  `number`                    | `0`            |                                        |
| `size`                |      `SfProgressLinearSize | SfProgressSize`        | `'base'`           |  `'minimal'`,`'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'` |
| `ariaLabel`    |      `string`                | `'Progress linear'`                     |                                      |
| `className`             |  `string`                    |               |                                  |            |
:::
::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/react/components/SfProgressLinear/SfProgressLinear.tsx
</SourceCode>
:::
