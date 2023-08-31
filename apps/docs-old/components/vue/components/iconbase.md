---
repoPath: /components/iconbase.md
layout: AtomLayout
hideBreadcrumbs: true
---

# Icons

::: slot usage

Storefront UI ships with a default set of icons available with the naming convention `SfIcon{Name}`. Each icon is a component that extends the `SfIconBase` component.

## List of icons

List of all icons shipped with Storefront UI below. Click on any of the icons to copy its name.

<Showcase showcase-name="IconBase/ListOfIcons"  allow="clipboard-write">

<<<../../preview/nuxt/pages/showcases/IconBase/ListOfIcons.vue

</Showcase>

## Examples

### Sizes

All Icon components supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="IconBase/IconBaseSizes" style="min-height:300px">

<<<../../preview/nuxt/pages/showcases/IconBase/IconBaseSizes.vue

</Showcase>

### Colors

All Icon components inherit the current text color using Tailwind's [`fill-current`](https://tailwindcss.com/docs/fill) class. You can customize the color of an icon with any of Tailwind's [`text color`](https://tailwindcss.com/docs/text-color) classes.

<Showcase showcase-name="IconBase/IconBaseColors">

<<<../../preview/nuxt/pages/showcases/IconBase/IconBaseColors.vue

</Showcase>


### Custom icon

The `SfIconBase` component supports displaying of a custom SVG icon. You can pass SVG content either via `content` prop or as a default slot .

If you're using a custom icon, you need to specify either the `viewBox` or `width`/`height` attributes for the SVG to render correctly.

<Showcase showcase-name="IconBase/CustomIcon">

<<<../../preview/nuxt/pages/showcases/IconBase/CustomIcon.vue

</Showcase>

## Notes

Storefront UI icons are generated with use of [`createIcons.js`](https://github.com/vuestorefront/storefront-ui/blob/v2/createIcons.js) script and they are based on `IconBase` component.

## Accessibility notes

When using an Icon without any additional label and/or description, you should specify an `aria-label` on the icon component.

## Playground

<Generate style="height: 380px" />
:::

::: slot api
| Prop name      | Type                                   | Default value | Possible values |
|----------------|----------------------------------------|---------------|-----------------|
| `size`                  | `SfIconSize`                          | `'base'`        | `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'` |
| `content`               | `string` |  |      Content of and SVG, e.g. `<path d='...'/>`           |

## Slots

| Slot name | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| `default`   | Content of an SVF, e.g. `<path d='...'/>`. Takes precedence over `content` prop |
:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfIconBase/SfIconBase.vue
</SourceCode>
:::
