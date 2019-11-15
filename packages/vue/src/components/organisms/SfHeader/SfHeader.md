# component-description
Full width hover-animated component with icons and tabs, e.g. usable for navigation

# common-usage
<br>
  <SfHeader :logo="logo" :cart-icon="cartIcon" :wishlist-icon="wishlistIcon" :account-icon="accountIcon">
    <template #navigations>
      Women
    </template>
  </SfHeader>

```html
<template>
  <SfHeader :logo="logo" :cart-icon="cartIcon" :wishlist-icon="wishlistIcon" :account-icon="accountIcon">
    <template #navigations>
      Women
    </template>
  </SfHeader>
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
        cartIcon: "cartIcon",
        wishlistIcon: "wishlistIcon",
        accountIcon: "accountIcon",
    }
  }
};
</script>
```