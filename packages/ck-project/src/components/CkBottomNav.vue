<template>
  <SfBottomNavigation class="ck-bottom-nav mobile-only">
    <SfBottomNavigationItem
      :icon="icon"
      :label="label"
      :icon-active="iconActive"
      :is-active="currentIcon === iconActive"
      @click="currentIcon = iconActive"
    />
    <SfBottomNavigationItem
      v-for="(item, key) in items"
      :key="key"
      :icon="item.icon"
      :icon-active="item.iconActive"
      :label="item.label"
      icon-size="20px"
      :is-active="currentIcon === item.iconActive"
      @click="currentIcon = item.iconActive"
    />
  </SfBottomNavigation>
</template>
<script>
import { SfBottomNavigation } from "@storefront-ui/vue";

export default {
  name: "CkBottomNav",
  components: {
    SfBottomNavigation,
  },
  data() {
    return {
      items: [
        { icon: "menu", iconActive: "menu", label: "Menu" },
        { icon: "marker", iconActive: "marker", label: "Stores" },
        { icon: "account", iconActive: "profile_fill", label: "Account" },
        { icon: "empty_cart", iconActive: "empty_cart", label: "Cart" },
      ],
      currentIcon: "home",
      label: "Home",
      icon: "home",
      iconActive: "home_fill",
    };
  },
};
</script>
<style lang="scss">
.ck-bottom-nav {
  padding: 0;
  border-radius: 60px;
}
</style>
