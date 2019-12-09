# component-description
MegaMenu component for page navigation.

# common-usage

```html
<template>
  <SfMegaMenu
    :parentMenu="Man"
  >
    <SfMegaMenuColumn v-for="category in categories" :title="category.header" :key="category.header">
        <SfMenuItem v-for="item in category.items" :label="item.label" :key="item.label" class="sf-mega-menu__subitem" />
    </SfMegaMenuColumn>
    <template #custom-section>
    <div v-for="tile in tiles" :key="tile.title" style="text-transform: uppercase;">
        <h3>{{ tile.title }}</h3>
        <SfImage class="mobile-only" style="margin: 1.25rem 2rem 1.25rem 0;" :src="tile.pictures.full" />
        <SfImage class="desktop-only" style="margin: 1.25rem 2rem 1.25rem 0;" :src="tile.pictures.normal" />
    </div>
    </template>
    </SfMegaMenu>
</template>

<script>
import { SfMegaMenu, SfMenuItem, SfImage } from "@storefront-ui/vue"
export default {
  components: { SfMegaMenu, SfImage, SfMenuItem, }
}
</script>
```
