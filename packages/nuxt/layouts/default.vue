<template>
  <div>
    <SfHeader :isSticky="true" @click:cart="open = true"></SfHeader>
      <nuxt />
    <SfFooter></SfFooter>
    <Cart v-if="false"/>
  </div>
</template>
<script>
  import {SfHeader, SfFooter} from "@storefront-ui/vue"
  import Cart from "@storefront-ui/vue/src/examples/pages/cart/Cart.vue"
  export default {
    components: {SfHeader, SfFooter, Cart},
  }
</script>
<style lang="scss">
  @import "~@storefront-ui/vue/styles.scss";
  html, body {
    margin: 0;
  }
</style>
