<template>
  <div id="cart">
    <SfSidebar
      :visible="isCartSidebarOpen"
      heading-title="My Cart"
      class="sf-sidebar--right"
      @close="() => {}"
    >
      <transition name="fade" mode="out-in">
        <div v-if="totalItems" key="my-cart" class="my-cart">
          <h3 class="my-cart__total-items">Total items: {{ totalItems }}</h3>
          <div class="collected-product-list">
            <transition-group name="fade" tag="div">
              <SfCollectedProduct
                v-for="product in products"
                :key="product.id"
                v-model="product.qty"
                :image="product.image"
                :title="product.title"
                :regular-price="product.price.regular | price"
                :special-price="product.price.special | price"
                class="collected-product"
                @click:remove="removeHandler(product)"
              >
                <template #configuration>
                  <div class="collected-product__properties">
                    <SfProperty
                      v-for="(property, key) in product.configuration"
                      :key="key"
                      :name="property.name"
                      :value="property.value"
                    />
                  </div>
                </template>
                <template #actions>
                  <div class="collected-product__actions">
                    <SfButton class="sf-button--text product__action">
                      Save for later
                    </SfButton>
                    <SfButton class="sf-button--text product__action">
                      Add to compare
                    </SfButton>
                  </div>
                </template>
              </SfCollectedProduct>
            </transition-group>
          </div>
          <SfProperty class="sf-property--full-width my-cart__total-price">
            <template #name>
              <span class="sf-property__name">TOTAL</span>
            </template>
            <template #value>
              <SfPrice :regular="totalPrice | price" class="sf-price--big" />
            </template>
          </SfProperty>
          <SfButton class="sf-button--full-width">Go to checkout</SfButton>
        </div>
        <div v-else key="empty-cart" class="empty-cart">
          <div class="empty-cart__banner">
            <img
              src="@storefront-ui/shared/icons/empty_cart.svg"
              alt=""
              class="empty-cart__icon"
            />
            <h3 class="empty-cart__label">Your bag is empty</h3>
            <p class="empty-cart__description">
              Looks like you haven’t added any items to the bag yet. Start
              shopping to fill it in.
            </p>
          </div>
          <SfButton class="sf-button--full-width color-secondary"
            >Start shopping</SfButton
          >
        </div>
      </transition>
    </SfSidebar>
  </div>
</template>
<script>
import {
  SfSidebar,
  SfButton,
  SfProperty,
  SfPrice,
  SfCollectedProduct
} from "@storefront-ui/vue";
export default {
  name: "Cart",
  components: {
    SfSidebar,
    SfButton,
    SfProperty,
    SfPrice,
    SfCollectedProduct
  },
  filters: {
    price: function(price) {
      if (!price) return;
      return `$${price}`;
    }
  },
  data() {
    return {
      isCartSidebarOpen: true,
      products: [
        {
          title: "Cream Beach Bag",
          id: "CBB1",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "50.00" },
          configuration: [
            { name: "Size", value: "XS" },
            { name: "Color", value: "White" }
          ],
          qty: "1"
        },
        {
          title: "Cream Beach Bag",
          id: "CBB2",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "50.00", special: "20.05" },
          configuration: [
            { name: "Size", value: "XS" },
            { name: "Color", value: "White" }
          ],
          qty: "2"
        },
        {
          title: "Cream Beach Bag",
          id: "CBB3",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "50.00", special: "20.50" },
          configuration: [
            { name: "Size", value: "XS" },
            { name: "Color", value: "White" }
          ],
          qty: "1"
        }
      ]
    };
  },
  computed: {
    totalItems() {
      return this.products.reduce(
        (totalItems, product) => totalItems + parseInt(product.qty, 10),
        0
      );
    },
    totalPrice() {
      return this.products
        .reduce((totalPrice, product) => {
          const price = product.price.special
            ? product.price.special
            : product.price.regular;
          const summary = parseFloat(price).toFixed(2) * product.qty;
          return totalPrice + summary;
        }, 0)
        .toFixed(2);
    }
  },
  methods: {
    removeHandler(product) {
      const products = [...this.products];
      this.products = products.filter(element => element.id !== product.id);
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
  flex: 1;
  display: flex;
  flex-direction: column;
  &__total-items {
    font-family: $body-font-family-secondary;
    font-size: $font-size-big-mobile;
    font-weight: $body-font-weight-secondary;
    @include for-desktop {
      font-size: $font-size-big-desktop;
    }
  }
  &__total-price {
    margin-bottom: $spacer-big;
  }
}
.collected-product-list {
  flex: 1;
  margin: $spacer-big -#{$spacer-big};
}
.collected-product {
  margin: $spacer-big 0;
  &__properties {
    margin-top: $spacer-big;
  }
  &__actions {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    @at-root.collected-product:hover & {
      @include for-desktop {
        opacity: 1;
      }
    }
  }
}
.empty-cart {
  flex: 1;
  display: flex;
  flex-direction: column;
  &__banner {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__icon {
    width: 18.125rem;
    height: 12.3125rem;
    margin-left: 60%;
    @include for-desktop {
      margin-left: 50%;
    }
  }
  &__label,
  &__description {
    line-height: 1.6;
    text-align: center;
  }
  &__label {
    margin-top: $spacer-extra-big;
    font-size: $font-size-big-desktop;
  }
  &__description {
    margin-top: $spacer-big;
  }
}
</style>
