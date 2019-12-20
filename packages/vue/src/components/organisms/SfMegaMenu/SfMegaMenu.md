# component-description
MegaMenu component for page navigation.

# common-usage
<br>

```html
<template>
  <SfMegaMenu
    title="Man"
    :visible="true"
  >
    <SfMegaMenuColumn 
      title="Clothing"
    >
      <SfMenuItem 
        label="Skirts" 
        class="sf-mega-menu__subitem" 
      />
    </SfMegaMenuColumn>
    <template 
      #aside
    >
      CUSTOM ASIDE
    </template>
  </SfMegaMenu>
</template>
<script>
  import { SfMegaMenu, SfMenuItem } from "@storefront-ui/vue"
  export default {
    components: { SfMegaMenu, SfMenuItem }
  }
</script>
```
