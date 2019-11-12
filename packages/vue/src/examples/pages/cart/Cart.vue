<template>
  <div id="cart">
    <SfSidebar :visible="isCartSidebarOpen" class="sf-sidebar--right">
      <div class="my-cart">
        <SfHeading
          title="My Account"
          class="sf-heading--left sf-heading--no-underline my-cart__title"
        />
        <h3 v-if="totalItems" class="my-cart__total-items">
          Total items: {{ totalItems }}
        </h3>
        <div v-if="totalItems" class="my-cart__product-list">
          <transition-group name="collapse-bottom" :duration="300" tag="div">
            <SfCollectedProduct
              v-for="product in products"
              :key="product.id"
              :image="product.image"
              :title="product.title"
              :regular-price="product.price.regular | price"
              :special-price="product.price.special | price"
              :stock="product.stock"
              v-model="product.qty"
              @click:remove="removeHandler(product)"
              class="collected-product"
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
        <div v-else class="empty-cart">
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
        <div class="my-cart__summary">
          <SfProperty
            v-if="totalItems"
            class="sf-property--full-width my-cart__total-price"
          >
            <template #name>
              <span class="sf-property__name">TOTAL</span>
            </template>
            <template #value>
              <SfPrice :regular="totalPrice | price" class="sf-price--big" />
            </template>
          </SfProperty>
          <SfButton v-if="totalItems" class="sf-button--full-width"
            >Go to checkout</SfButton
          >
          <SfButton
            v-else
            class="sf-button--full-width color-secondary my-cart__button"
            >Start shopping</SfButton
          >
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
  SfCollectedProduct
} from "../../../../index.js";
export default {
  name: "Cart",
  components: {
    SfSidebar,
    SfButton,
    SfProperty,
    SfPrice,
    SfHeading,
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
          image: "assets/storybook/homepage/productA.jpg",
          price: { regular: "50.00" },
          configuration: [
            { name: "Size", value: "XS" },
            { name: "Color", value: "White" }
          ],
          qty: "1",
          stock: 44
        },
        {
          title: "Cream Beach Bag",
          id: "CBB2",
          image: "assets/storybook/homepage/productB.jpg",
          price: { regular: "50.00", special: "20.05" },
          configuration: [
            { name: "Size", value: "XS" },
            { name: "Color", value: "White" }
          ],
          qty: "2",
          stock: 10
        },
        {
          title: "Cream Beach Bag",
          id: "CBB3",
          image: "assets/storybook/homepage/productC.jpg",
          price: { regular: "50.00", special: "20.50" },
          configuration: [
            { name: "Size", value: "XS" },
            { name: "Color", value: "White" }
          ],
          qty: "1",
          stock: 20
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
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0;
  }
  @include for-desktop {
    width: 25.5rem;
  }
  &__title {
    margin: $spacer-extra-big $spacer-extra-big 0 $spacer-extra-big;
  }
  &__total-items {
    margin: 1.5625rem $spacer-extra-big 0 $spacer-extra-big;
  }
  &__total-price {
    margin-bottom: $spacer-big;
  }
  &__product-list {
    margin: $spacer-big;
  }
  &__summary {
    margin: 0 $spacer-extra-big $spacer-extra-big;
  }
}
.empty-cart {
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: $spacer-extra-big;
  &__icon {
    width: 18.125rem;
    height: 12.3125rem;
    margin-left: 70%;
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
</style>
