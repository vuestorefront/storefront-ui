<template>
  <div>
    <SfHeader class="sf-header--multiline" title="Storefront UI" logo="/assets/logo.svg" cartItemsQty="1" is-sticky>
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="(item, i) in navigation"
            :key="i">
          <SfLink :link="item.link">{{item.name}}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
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
  import {SfHeader, SfFooter, SfBottomNavigation, SfLink } from "@storefront-ui/vue"
  import Cart from "@storefront-ui/vue/src/examples/pages/cart/Cart.vue"
  export default {
    components: {SfHeader, SfFooter, Cart, SfBottomNavigation, SfLink},
    data(){
      return {
        currentIcon: "profile_fill",
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
        ],
        navigation: [
          {link: "/category", name: "Category"},
          {link: "/product", name: "Product"},
          {link: "/cart", name: "Cart"},
          {link: "/detailed-cart", name: "Detailed Cart"},
          {link: "/login", name: "Login"},
          {link: "/my-account", name: "My Account"},
          {link: "/static", name: "Static"},
          {link: "/thank-you", name: "Thank You"}
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
