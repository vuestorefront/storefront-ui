---
repoPath: /components/listitem.md
layout: AtomLayout
hideBreadcrumbs: true
---
# ListItem

::: slot usage

`SfListItem` is a component that can be used in all sorts of menus. It comes with styles for common data states like `disabled` and `selected`.

For a great example of the `SfListItem` in action, check out the [Colors Filter](/react/blocks/filters.html) block.

## Examples

### ListItem sizes

`SfListItem` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="ListItem/ListItemSizes" style="min-height:250px">

<<<../../preview/next/pages/showcases/ListItem/ListItemSizes.tsx#source
</Showcase>

### ListItem slots

`SfListItem` provides `slotPrefix` and `slotSuffix` props that you can use to add custom content before/after your default content. This can be useful for adding inputs, thumbnails, icons, or any other content to your list items. 

<Showcase showcase-name="ListItem/ListItemSlots" >

<<<../../preview/next/pages/showcases/ListItem/ListItemSlots.tsx#source
</Showcase>

### ListItem truncate

For items with a lot of text content, you can use Tailwind's `truncate` class.

<Showcase showcase-name="ListItem/ListItemTruncated" >

<<<../../preview/next/pages/showcases/ListItem/ListItemTruncated.tsx#source
</Showcase>


## Playground

<Generate />

:::

::: slot api

## Props

| Prop name          | Type          | Default value | Possible values            |
| ------------------ | ------------  | ------------- | -------------------------- |
| `size`               | `SfListItemSize`        | `'base'`          | `'sm'`, `'base'`, `'lg'`               |
| `disabled `          | `boolean`      | `false`         |                            |
| `selected`           | `boolean`       | `false`        |                            |
| `as`                 | `ReactElement`  | `'li'`            | any tag name               |
| `children`           | `ReactNode`     |               | label content              |
| `slotPrefix`         | `ReactNode`     |               | right side content         |
| `slotSuffix`         | `ReactNode`     |               | left side content          |
| `className`          | `string`        |               |                            |


:::

::: slot source
<SourceCode>
<<< ../../../packages/sfui/frameworks/react/components/SfListItem/SfListItem.tsx
</SourceCode>
:::
