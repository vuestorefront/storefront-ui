<template>
  <div id="cart">
    <SfSidebar :visible="true" class="sf-sidebar--right">
      <div class="my-cart">
        My Cart
      </div>
    </SfSidebar>
  </div>
</template>

<script>
import { SfSidebar } from "../../../../index.js";
export default {
  name: "Cart",
  components: {
    SfSidebar
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}

#cart {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
</style>
