<template>
  <div class="playground">
    <!-- server []; client [x] -->
    <SfImage :src="src"/>
    <!-- server [x]; client [x] and it loading again on client side -->
<!--    <img :src="src" alt="">-->
  </div>
</template>
<script>
  import { SfImage } from "@storefront-ui/vue"
  export default {
    name: "playground",
    layout: "blank",
    components: { SfImage },
    data(){
      return {
        src: "https://storybook.storefrontui.io/assets/storybook/SfImage/product-216x326.jpg"
      }
    }
  }
</script>
<style lang="scss" scoped>
.playground{

}
</style>
