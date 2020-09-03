<template>
  <div class="playground" style="padding: 1rem">
    <SfPagination :total="10"/>
  </div>
</template>
<script>
  import { SfImage, SfPagination } from "@storefront-ui/vue"
  export default {
    name: "playground",
    layout: "blank",
    components: { SfImage, SfPagination },
    data(){
      return {
        src: "/assets/storybook/SfImage/product-216x326.jpg",
        ob: {
          mobile: {
            url: "https://storybook.storefrontui.io/assets/storybook/SfImage/product-109x164.jpg"
          },
          desktop: {
            url: "https://storybook.storefrontui.io/assets/storybook/SfImage/product-216x326.jpg"
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.playground{

}
</style>
