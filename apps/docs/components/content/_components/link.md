# Link

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfLink` is a component that allows you to create a consistent link style across your application.

## Examples

### Link variants

`SfLink` supports 2 variants that can be set via `variant` prop: `'primary'`, `'secondary'`.

<Showcase showcase-name="Link/LinkVariants">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Link/LinkVariants.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Link/LinkVariants.tsx

::

</Showcase>

### Customization

When using the `'secondary'` variant, the text color of the base state is inherited from the parent element.

You can [customize your color palette](../customization/theming.html) as a part of your Tailwind config.

<Showcase showcase-name="Link/Customization">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Link/Customization.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Link/Customization.tsx

::

</Showcase>

::tip Need more customization?

If you need more customization beyond the built-in variants, we recommend copying the `SfLink` [source code](#source) and modifying it to your needs. This way, you can have all the custom styles for your design system, but still be able to easily use all of our [Blocks](./blocks.html).
::



## Accessibility notes

::vue-only
Link component can be rendered as an `<a>`, `<NuxtLink>`, or any other tag by providing it with prop `tag`. 
::

::react-only
Link component can be rendered as an `<a>`, `<NextLink>`, or any other tag by providing it with prop `as`. 
::



When no tag provided, the component will render as an `<a>`. To achieve proper accessibility it is important to implement required properties depending on the passed tag.

::react-only
### Usage with NextJS Link

`SfLink` can be composed together with `NextJS` link component.

<Showcase showcase-name="Link/NextLink">
<<<../../../../preview/next/pages/showcases/Link/NextLink.tsx
</Showcase>
::

::vue-only

### Usage with Nuxt Link

You can use the `tag` prop to render component as `NuxtLink`.

<Showcase showcase-name="Link/NuxtLink">
<<<../../../../preview/nuxt/pages/showcases/Link/NuxtLink.vue
</Showcase>
::

## Playground

<Generate style="height: 450px" />

#tab-2

## Props

::vue-only
| Prop name | Type            | Default value | Possible values            |
| --------- | --------------- | ------------- | -------------------------- |
| `variant` | `SfLinkVariant` | `'primary'`   | `'primary'`, `'secondary'` |
| `tag` | `string` | `'a'` | |
::
::react-only
| Prop name | Type            | Default value | Possible values            |
| --------- | --------------- | ------------- | -------------------------- |
| `variant` | `SfLinkVariant` | `'primary'`   | `'primary'`, `'secondary'` |
| `as` | `ReactElement` | `'a'` | any tag name |
| `children` | `ReactNode` | | Default slotted content |
::
::vue-only

## Slots
| Slot name | Description                  |
| --------- | ---------------------------- |
| `default` | replaces the default content |
::

#tab-3

:partial{content="block-callout"}

::vue-only

<<<../../../../../packages/sfui/frameworks/vue/components/SfLink/SfLink.vue

::
::react-only

<<<../../../../../packages/sfui/frameworks/react/components/SfLink/SfLink.tsx

::
::
