<template>
  <div id="cart">
    <SfSidebar
      :visible="isCartSidebarOpen"
      class="sf-sidebar--right"
      @close="isCartSidebarOpen = false"
    >
      <template #circle-icon>
        <SfCircleIcon class="my-cart__circle-icon sf-sidebar__circle-icon"
          >2</SfCircleIcon
        >
      </template>
      <div class="my-cart">
        <div class="my-cart__heading">
          <h2 class="my-cart__title">My cart</h2>
          <button @click="isCartSidebarOpen = false" class="my-cart__cross">
            <SfIcon icon="cross" size="20px" color="#BEBFC4" />
          </button>
        </div>
        <h3 class="my-cart__subtitle">Total items</h3>
        <SfCollectedProduct
          v-for="(product, key) in ['', '']"
          :key="key"
          image="assets/storybook/product_thumb.jpg"
          title="Summer Bag"
          regular-price="$50.00"
        >
          <template #configuration>
            <div style="margin-top: 1.25rem">
              <SfProperty name="Size" value="XS" />
              <SfProperty name="Color" value="White" />
            </div>
          </template>
          <template #actions>
            <div style="color: #A3A5AD">
              <div>MSD23-345-324</div>
              <div>Quantity: <span style="color: #1D1F22">1</span></div>
            </div>
          </template>
        </SfCollectedProduct>
        <SfProperty
          name="Total"
          value="$100.00"
          class="sf-property--full-width"
        ></SfProperty>
        <SfButton class="my-cart__button">Go to checkout</SfButton>
      </div>
    </SfSidebar>
  </div>
</template>
<script>
import {
  SfSidebar,
  SfCircleIcon,
  SfIcon,
  SfCollectedProduct,
  SfProperty,
  SfButton
} from "../../../../index.js";
export default {
  name: "Cart",
  components: {
    SfSidebar,
    SfCircleIcon,
    SfIcon,
    SfCollectedProduct,
    SfProperty,
    SfButton
  },
  data() {
    return {
      isCartSidebarOpen: true
    };
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
.my-cart {
  box-sizing: border-box;
  width: 20rem;
  height: 100%;
  overflow-y: auto;
  padding: 0 $spacer-extra-big;
  @include for-desktop {
    width: 25.5rem;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
  &__circle-icon {
    cursor: default;
  }
  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: $spacer-extra-big;
  }
  &__title,
  &__subtitle {
    font-family: $body-font-family-secondary;
    line-height: 1.6;
  }
  &__cross {
    cursor: pointer;
    padding: 0;
    border: 0;
    background-color: transparent;
    outline: none;
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 500;
  }
  &__subtitle {
    margin-top: $spacer-big;
    font-size: 1.125rem;
    font-weight: $body-font-weight-secondary;
  }
  &__button {
    margin-bottom: $spacer-extra-big;
  }
}
</style>
