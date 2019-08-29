<template>
  <div id="home"></div>
</template>
<script>
import {} from "@storefront-ui/vue";

export default {
  name: "Product",
  data() {
    return {};
  },
  components: {},
  mounted() {
    document.body.style.setProperty("margin", "0");
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";
#product {
  max-width: 1240px;
  margin: auto;
  box-sizing: border-box;
  padding: 0 $spacer-big;
  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}
</style>
