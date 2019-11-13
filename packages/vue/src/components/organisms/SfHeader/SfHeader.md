# component-description
Full width hover-animated component with icons and tabs, e.g. usable for navigation

# common-usage
<br>
<SfHeader :logo="/assets/logo.svg" :navigations="["WOMAN", "MEN"]" :cart-icon="cartIcon" :wishlist-icon="wishlistIcon" :account-icon="accountIcon" />

```html
<template>
  <SfHeader :logo="logo" :navigations="navigations" :cart-icon="cartIcon" :wishlist-icon="wishlistIcon" :account-icon="accountIcon" />
</template>
<script>
import { SfHeader } from "@storefront-ui/vue";

export default {
  components: {
    SfHeader,
  },
  data() {
    return {
        logo: "/assets/logo.svg",
        navigations: ["WOMEN", "MEN"],
        cartIcon: "cartIcon",
        wishlistIcon: "wishlistIcon",
        accountIcon: "accountIcon",
    }
  }
};
</script>
```