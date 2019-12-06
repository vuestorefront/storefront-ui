# component-description

Component with input to choose numeric values and describe quantity.

# common-usage

<br>
<SfQuantitySelector :stock="2" :qty="1" />

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
