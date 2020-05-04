<template>
  <div>
    <SfHeader v-if="false" :isSticky="true" @click:cart="open = true"></SfHeader>
      <nuxt />
    <SfFooter v-if="false"></SfFooter>
    <SfBottomNavigation class="mobile-only">
      <SfBottomNavigationItem
          v-for="(item, key) in items"
          :key="key"
          :icon="item.icon"
          :icon-active="item.iconActive"
          :label="item.label"
          icon-size="17px"
          :is-active="currentIcon === item.iconActive"
          @click="currentIcon = item.iconActive"
      />
      <SfBottomNavigationItem
          label="Basket"
          icon="add_to_cart"
          :isFloating="true"
      />
    </SfBottomNavigation>
    <Cart v-if="false"/>
  </div>
</template>
<script>
  import {SfHeader, SfFooter, SfBottomNavigation } from "@storefront-ui/vue"
  import Cart from "@storefront-ui/vue/src/examples/pages/cart/Cart.vue"
  export default {
    components: {SfHeader, SfFooter, Cart, SfBottomNavigation},
    data(){
      return {
        items: [
          {
            icon: "home",
            iconActive: "",
            label: "Home"
          },
          {
            icon: "menu",
            iconActive: "",
            label: "Menu"
          },
          {
            icon: "heart",
            iconActive: "heart_fill",
            label: "Heart"
          },
          {
            icon: "profile",
            iconActive: "profile_fill",
            label: "Profile"
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  @import "~@storefront-ui/vue/styles.scss";
  html, body {
    margin: 0;
  }
</style>
