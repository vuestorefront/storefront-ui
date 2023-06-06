<template>
  <div>
    <Cart @closeSidebar="$router.push('/')"/>
  </div>
</template>

<script>
  import Cart from "@storefront-ui/vue/src/components/templates/cart/Cart.vue"
  export default {
    components: {
      Cart
    }
  }
</script>
