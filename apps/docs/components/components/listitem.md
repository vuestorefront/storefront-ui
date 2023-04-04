---
layout: AtomLayout
hideBreadcrumbs: true
---
# ListItem

::: slot usage

`SfListItem` is a component that can be used in all sorts of menus. It comes with styles for common data states like `disabled` and `selected`.

For a great example of the `SfListItem` in action, check out the [Colors Filter](/<!-- vue -->vue<!-- end vue --><!-- react -->react<!-- end react -->/blocks/filters.html)

## Examples

### ListItem sizes

`SfListItem` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="ListItem/ListItemSizes" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItem/ListItemSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItem/ListItemSizes.tsx#source
<!-- end react -->
</Showcase>

### ListItem slots

`SfListItem` provides <!-- vue -->`prefix` and `suffix` slots<!-- end vue --><!-- react -->`slotPrefix` and `slotSuffix` props<!-- end react --> that you can use to add custom content before/after your default content. This can be useful for adding inputs, thumbnails, icons, or any other content to your list items. 

<Showcase showcase-name="ListItem/ListItemSlots" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItem/ListItemSlots.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItem/ListItemSlots.tsx#source
<!-- end react -->
</Showcase>

### ListItem truncate

For items with a lot of text content, you can use Tailwind's `truncate` class.

<Showcase showcase-name="ListItem/ListItemTruncated" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItem/ListItemTruncated.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItem/ListItemTruncated.tsx#source
<!-- end react -->
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
<!-- vue -->
| `tag`                | `string`        | `'li'`           | any tag name               |
<!-- end vue -->
<!-- react -->
| `as`                 | `ReactElement`  | `'li'`            | any tag name               |
| `children`           | `ReactNode`     |               | label content              |
| `slotPrefix`         | `ReactNode`     |               | right side content         |
| `slotSuffix`         | `ReactNode`     |               | left side content          |
| `className`          | `string`        |               |                            |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description        |
| --------- | ------------------ |
| default   | content            |
| prefix    | right side content |
| suffix    | left side content  |

<!-- end vue -->

:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfListItem/SfListItem.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfListItem/SfListItem.tsx
<!-- end react -->
</SourceCode>
:::
