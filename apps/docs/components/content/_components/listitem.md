# ListItem

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfListItem` is a component that can be used in all sorts of menus. It comes with styles for common data states like `disabled` and `selected`.

## Examples

### ListItem sizes

`SfListItem` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="ListItem/ListItemSizes" style="min-height:250px">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/ListItem/ListItemSizes.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/ListItem/ListItemSizes.tsx

::

</Showcase>

### ListItem slots

::vue-only
`SfListItem` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding inputs, thumbnails, icons, or any other content to your list items.
::
::react-only
`SfListItem` provides `slotPrefix` and `slotSuffix` props that you can use to add custom content before/after your default content. This can be useful for adding inputs, thumbnails, icons, or any other content to your list items.
::
<Showcase showcase-name="ListItem/ListItemSlots" >

::vue-only

<<<../../../../preview/nuxt/pages/showcases/ListItem/ListItemSlots.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/ListItem/ListItemSlots.tsx

::

</Showcase>

### ListItem truncate

For items with a lot of text content, you can use Tailwind's `truncate` class.

<Showcase showcase-name="ListItem/ListItemTruncated" >

::vue-only

<<<../../../../preview/nuxt/pages/showcases/ListItem/ListItemTruncated.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/ListItem/ListItemTruncated.tsx

::

</Showcase>

## Accessibility notes

::vue-only
ListItem component can be rendered as an `<li>` or `<a>` or any other tag by providing it with prop `tag`. 

::
::react-only
ListItem component can be rendered as an `<li>` or `<a>` or any other tag by providing it with prop `as`.
::


When no tag provided, the component will render as an `<li>`. To achieve proper accessibility it is important to implement required properties depending on the passed tag.

## Playground

<Generate style="height: 450px" />

#tab-2

## Props


::vue-only
| Prop name   | Type             | Default value | Possible values          |
| ----------- | ---------------- | ------------- | ------------------------ |
| `size`      | `SfListItemSize` | `'base'`      | `'sm'`, `'base'`, `'lg'` |
| `disabled ` | `boolean`        | `false`       |                          |
| `selected`  | `boolean`        | `false`       |                          |
| `tag`                | `string`        | `'li'`           | any tag name               |
| `childrenTag`        | `string`        | `'span'`            | any tag name               |
::
::react-only
| Prop name   | Type             | Default value | Possible values          |
| ----------- | ---------------- | ------------- | ------------------------ |
| `size`      | `SfListItemSize` | `'base'`      | `'sm'`, `'base'`, `'lg'` |
| `disabled ` | `boolean`        | `false`       |                          |
| `selected`  | `boolean`        | `false`       |                          |
| `as`                 | `ReactElement`  | `'li'`            | any tag name               |
| `children`           | `ReactNode`     |               | label content              |
| `childrenTag`        | `ReactElement`  | `'span'`            | any tag name               |
| `slotPrefix`         | `ReactNode`     |               | right side content         |
| `slotSuffix`         | `ReactNode`     |               | left side content          |
| `className`          | `string`        |               |                            |
::

::vue-only

## Slots

| Slot name | Description        |
| --------- | ------------------ |
| default   | content            |
| prefix    | right side content |
| suffix    | left side content  |

::

#tab-3

:partial{content="block-callout"}


::vue-only

<<<../../../../../packages/sfui/frameworks/vue/components/SfListItem/SfListItem.vue

::
::react-only

<<<../../../../../packages/sfui/frameworks/react/components/SfListItem/SfListItem.tsx

::

::
