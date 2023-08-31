---
repoPath: /components/link.md
layout: AtomLayout
hideBreadcrumbs: true
---
# Link

:::::: slot usage

`SfLink` is a component that allows you to create a consistent link style across your application. 

## Examples

### Link variants

`SfLink` supports 2 variants that can be set via `variant` prop: `'primary'`, `'secondary'`. 

<Showcase showcase-name="Link/LinkVariants">

<<<../../preview/next/pages/showcases/Link/LinkVariants.tsx#source
</Showcase>

### Customization

When using the `'secondary'` variant, the text color of the base state is inherited from the parent element.

You can [customize your color palette](../customization/theming.html) as a part of your Tailwind config.

<Showcase showcase-name="Link/Customization">

<<<../../preview/next/pages/showcases/Link/Customization.tsx#source
</Showcase>

::: tip Need more customization?

If you need more customization beyond the built-in variants, we recommend copying the `SfLink` [source code](#source) and modifying it to your needs. This way, you can have all the custom styles for your design system, but still be able to easily use all of our [Blocks](../blocks.html).
:::

### Usage with NextJS Link

`SfLink` can be composed together with `NextJS` link component.

<Showcase showcase-name="Link/NextLink">
<<<../../preview/next/pages/showcases/Link/NextLink.tsx#source
</Showcase>


## Playground

<Generate />
::::::

::: slot api

## Props

| Prop name | Type             | Default value | Possible values    |
| --------- | ---------------- | ------------- | ------------------ |
| `variant`   | `SfLinkVariant`   | `'primary'`       | `'primary'`, `'secondary'` |
| `as` | `ReactElement` | `'a'` | any tag name |
| `children` | `ReactNode` | | Default slotted content |


:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/react/components/SfLink/SfLink.tsx
</SourceCode>
:::
