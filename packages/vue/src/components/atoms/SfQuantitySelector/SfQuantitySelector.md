# component-description

Selector input for chosing quantity of products

# common-usage

<br>
<SfQuantitySelector stock="2" qty="1" />

```html

<template>
  <SfQuantitySelector :stock="stock" :qty="qty" />
</template>

<script>
  import { SfQuantitySelector } from "@storefront-ui/vue";

  export default {
    components: {
      SfQuantitySelector
    }
  };
</script>
```
