<template>
  <div id="cart">
    <SfSidebar
      :visible="isCartSidebarOpen"
      class="sf-sidebar--right"
      @close="isCartSidebarOpen = false"
    >
      <template #circle-icon>
        <SfCircleIcon class="my-cart__total-count sf-sidebar__circle-icon">
          {{ totalItems }}
        </SfCircleIcon>
      </template>
      <div class="my-cart">
        <div class="my-cart__header">
          <div class="my-cart__heading">
            <SfHeading
              title="My cart"
              class="sf-heading--no-underline sf-heading--left"
            />
            <button class="my-cart__close" @click="isCartSidebarOpen = false">
              <SfIcon icon="cross" size="20px" color="#BEBFC4" />
            </button>
          </div>
          <h3 class="my-cart__total-heading">Total items</h3>
        </div>
        <div class="my-cart__product-list">
          <SfCollectedProduct
            v-for="(product, key) in products"
            :key="key"
            image="/assets/storybook/homepage/productB.jpg"
            title="Cashmere Sweater"
            regularPrice="$50.00"
            class="product"
          >
            <template #configuration>
              <div class="product__properties">
                <SfProperty name="Size" value="XS" />
                <SfProperty name="Color" value="White" />
              </div>
            </template>
          </SfCollectedProduct>
        </div>
        <div class="my-cart__summary">
          <SfProperty class="my-cart__total sf-property--full-width">
            <template #name>
              <span class="sf-property__name">TOTAL</span>
            </template>
            <template #value>
              <SfPrice :regular="totalPrice" class="sf-price--big" />
            </template>
          </SfProperty>
          <SfButton class="sf-button--full-width">Go to checkout</SfButton>
        </div>
      </div>
    </SfSidebar>
  </div>
</template>
<script>
import {
  SfSidebar,
  SfButton,
  SfProperty,
  SfPrice,
  SfHeading,
  SfCollectedProduct,
  SfCircleIcon,
  SfIcon
} from "../../../../index.js";
export default {
  name: "Cart",
  components: {
    SfSidebar,
    SfButton,
    SfProperty,
    SfPrice,
    SfHeading,
    SfCollectedProduct,
    SfCircleIcon,
    SfIcon
  },
  data() {
    return {
      isCartSidebarOpen: true,
      products: ["", "", "", ""]
    };
  },
  computed: {
    totalItems() {
      return 2;
    },
    totalPrice() {
      return "$100.00";
    }
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
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  @include for-desktop {
    width: 25.5rem;
  }
  &__header {
    padding: $spacer-extra-big;
  }
  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__close {
    border: 0;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
  &__total-count {
    font-family: $body-font-family-primary;
    font-size: $font-size-extra-big-desktop;
    font-weight: 400;
    line-height: 1.6;
    cursor: default;
  }
  &__total-heading {
    margin: 1.875rem 0 0;
    font-family: $body-font-family-secondary;
    font-size: $font-size-big-mobile;
    font-weight: 400;
    line-height: 1.6;
  }
  &__product-list {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 1.875rem;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  &__summary {
    margin-top: auto;
    padding: $spacer-extra-big;
  }
  &__total {
    margin: $spacer-big 0;
  }
}
.product {
  &:not(:first-child) {
    margin-top: $spacer-big;
  }
  &__properties {
    margin-top: $spacer-big;
  }
}
</style>
