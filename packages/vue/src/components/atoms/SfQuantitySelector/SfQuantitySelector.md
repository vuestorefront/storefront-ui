# component-description

Component with input to choose numeric values and describe quantity.

# common-usage

<br>

```html

<template>
  <SfQuantitySelector 
    v-model="" 
    :stock="99" 
    :min="1"
  />
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
