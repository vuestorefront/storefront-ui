# component-description
Price information component with optional display of previous price.

# common-usage
<br>
<SfPrice regular="$99.99" special="$75" />

```html
<template>
  <SfPrice :regular="priceRegular" :special="priceSpecial" />
</template>
<script>
import { SfPrice } from "@storefront-ui/vue";

export default {
  components: {
    SfPrice
  },
  data() {
    return {
      priceRegular: "$99.99",
      priceSpecial: "$75",
    };
  }
};
</script>
```
