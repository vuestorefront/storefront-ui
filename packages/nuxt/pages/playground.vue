<template>
  <div class="playground">
    <p>String</p>
    <SfImage :src="src" :lazy="false" alt="Cotton Sweater" width="216" height="326">
      Cotton Sweater
    </SfImage>
    <p>Object</p>
    <SfImage :src="ob" :lazy="false" alt="Cotton Sweater">
      Cotton Sweater
    </SfImage>
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
