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

<<<../../preview/nuxt/pages/showcases/Link/LinkVariants.vue
</Showcase>

### Customization

When using the `'secondary'` variant, the text color of the base state is inherited from the parent element.

You can [customize your color palette](../customization/theming.html) as a part of your Tailwind config.

<Showcase showcase-name="Link/Customization">

<<<../../preview/nuxt/pages/showcases/Link/Customization.vue
</Showcase>

::: tip Need more customization?

If you need more customization beyond the built-in variants, we recommend copying the `SfLink` [source code](#source) and modifying it to your needs. This way, you can have all the custom styles for your design system, but still be able to easily use all of our [Blocks](../blocks.html).
:::


### Usage with Nuxt Link

You can use the `tag` prop to render component as `NuxtLink`.

<Showcase showcase-name="Link/NuxtLink">
<<<../../preview/nuxt/pages/showcases/Link/NuxtLink.vue
</Showcase>

## Playground

<Generate />
::::::

::: slot api

## Props

| Prop name | Type             | Default value | Possible values    |
| --------- | ---------------- | ------------- | ------------------ |
| `variant`   | `SfLinkVariant`   | `'primary'`       | `'primary'`, `'secondary'` |
| `tag` | `string` | `'a'` | |

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | replaces the default content |

:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfLink/SfLink.vue
</SourceCode>
:::
