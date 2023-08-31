---
repoPath: /components/listitem.md
layout: AtomLayout
hideBreadcrumbs: true
---
# ListItem

::: slot usage

`SfListItem` is a component that can be used in all sorts of menus. It comes with styles for common data states like `disabled` and `selected`.

For a great example of the `SfListItem` in action, check out the [Colors Filter](/vue/blocks/filters.html) block.

## Examples

### ListItem sizes

`SfListItem` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="ListItem/ListItemSizes" style="min-height:250px">

<<<../../preview/nuxt/pages/showcases/ListItem/ListItemSizes.vue
</Showcase>

### ListItem slots

`SfListItem` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding inputs, thumbnails, icons, or any other content to your list items. 

<Showcase showcase-name="ListItem/ListItemSlots" >

<<<../../preview/nuxt/pages/showcases/ListItem/ListItemSlots.vue
</Showcase>

### ListItem truncate

For items with a lot of text content, you can use Tailwind's `truncate` class.

<Showcase showcase-name="ListItem/ListItemTruncated" >

<<<../../preview/nuxt/pages/showcases/ListItem/ListItemTruncated.vue
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
| `tag`                | `string`        | `'li'`           | any tag name               |

## Slots

| Slot name | Description        |
| --------- | ------------------ |
| default   | content            |
| prefix    | right side content |
| suffix    | left side content  |


:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfListItem/SfListItem.vue
</SourceCode>
:::
