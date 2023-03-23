---
layout: AtomLayout
hideBreadcrumbs: true
description: The ListItem component is used in all kind of menus. It can act like a link or a button.
---
# ListItem

::: slot usage

{{ $frontmatter.description }}

## ListItem sizes

ListItem supports 3 sizes that can be set via `size` prop: `sm`, `base`, `lg`.

<Showcase showcase-name="ListItem/ListItemSizes" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItem/ListItemSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItem/ListItemSizes.tsx#source
<!-- end react -->
</Showcase>

## ListItem truncate

ListItem with `truncate` class.

<Showcase showcase-name="ListItem/ListItemTruncated" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItem/ListItemTruncated.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItem/ListItemTruncated.tsx#source
<!-- end react -->
</Showcase>

## ListItem slots

ListItem has additional slots to place custom content. Slot <!-- vue --> `prefix`<!-- end vue --> <!-- react -->`prefixSlot` <!-- end react --> is used to place content on the left side of the component. Elements placed in slot  <!-- vue --> `suffix`<!-- end vue --> <!-- react --> `suffixSlot` <!-- end react --> will be added on its right side.

<Showcase showcase-name="ListItem/ListItemSlots" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItem/ListItemSlots.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItem/ListItemSlots.tsx#source
<!-- end react -->
</Showcase>

## Playground

<Generate />

:::

::: slot api
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
