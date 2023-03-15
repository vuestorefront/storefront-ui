---
layout: AtomLayout
hideBreadcrumbs: true
description: The ListItemMenu component is used in all kind of menus. It can act like a link or a button.
---
# ListItemMenu

::: slot usage

{{ $frontmatter.description }}

## ListItemMenu sizes

ListItemMenu supports 3 sizes that can be set via `size` prop: `sm`, `base`, `lg`.

<Showcase showcase-name="ListItemMenu/ListItemMenuSizes" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItemMenu/ListItemMenuSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItemMenu/ListItemMenuSizes.tsx
<!-- end react -->
</Showcase>

## ListItemMenu truncate

ListItemMenu with `truncate` class.

<Showcase showcase-name="ListItemMenu/ListItemMenuTruncated" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItemMenu/ListItemMenuTruncated.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItemMenu/ListItemMenuTruncated.tsx
<!-- end react -->
</Showcase>

## ListItemMenu slots

ListItemMenu has additional slots to place custom content. Slot <!-- vue --> `prefix`<!-- end vue --> <!-- react -->`prefixSlot` <!-- end react --> is used to place content on the left side of the component. Elements placed in slot  <!-- vue --> `suffix`<!-- end vue --> <!-- react --> `suffixSlot` <!-- end react --> will be added on its right side.

<Showcase showcase-name="ListItemMenu/ListItemMenuSlots" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/ListItemMenu/ListItemMenuSlots.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/ListItemMenu/ListItemMenuSlots.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate />

:::

::: slot api
## Props

| Prop name          | Type          | Default value | Possible values            |
| ------------------ | ------------  | ------------- | -------------------------- |
| size               | string        | base          | sm, base, lg               |
| link               | string        | ''            |                            |
| secondaryText      | string        | ''            |                            |
| disabled           | boolean       | false         |                            |
| selected           | boolean       | false         |                            |
| selectedBackground | boolean       | false         |                            |
<!-- vue -->
| tag                | string        | li            | any tag name               |
<!-- end vue -->
<!-- react -->
| as                 | ReactElement  | li            | any tag name               |
| children           | ReactNode     |               | label content              |
| slotPrefix         | ReactNode     |               | right side content         |
| slotSuffix         | ReactNode     |               | left side content          |
| className          | string        |               |                            |
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
<<<../../../packages/sfui/frameworks/vue/components/VsfListItemMenu/VsfListItemMenu.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfListItemMenu/VsfListItemMenu.tsx
<!-- end react -->
</SourceCode>
:::
