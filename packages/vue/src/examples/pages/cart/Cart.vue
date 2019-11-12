<template>
  <div id="cart">
    <SfSidebar :visible="true" class="sf-sidebar--right">
      <div class="my-cart">
        <SfHeading
          title="My Account"
          class="sf-heading--left sf-heading--no-underline my-cart__title"
        />
        <template v-if="totalItems">
          <h3>Total items: {{ totalItems }}</h3>
          <SfCollectedProduct
            v-for="(product, key) in products"
            :key="key"
            :image="product.image"
            :title="product.title"
            :regular-price="product.price.regular | price"
            :special-price="product.price.special | price"
            :stock="product.stock"
            v-model="product.qty"
            @click:remove="removeHandler(product)"
          >
            <template #configuration>
              <div>
                <SfProperty
                  v-for="(property, key) in product.configuration"
                  :key="key"
                  :name="property.name"
                  :value="property.value"
                />
              </div>
            </template>
            <template #actions>
              <div>
                <SfButton class="sf-button--text product__action">
                  Save for later
                </SfButton>
                <SfButton class="sf-button--text product__action">
                  Add to compare
                </SfButton>
              </div>
            </template>
          </SfCollectedProduct>
          <SfProperty class="sf-property--full-width">
            <template #name>
              <span class="sf-property__name">TOTAL</span>
            </template>
            <template #value>
              <SfPrice :regular="totalPrice | price" class="sf-price--big" />
            </template>
          </SfProperty>
          <SfButton class="sf-button--full-width">Go to checkout</SfButton>
        </template>
        <!-- empty cart -->
        <template v-else>
          <div class="empty-cart">
            <img src="@storefront-ui/shared/icons/empty_cart.svg" alt="" />
            <h3>Your bag is empty</h3>
            <p>
              Looks like you haven’t added any items to the bag yet. Start
              shopping to fill it in.
            </p>
          </div>
          <div class="my-cart__summary">
            <SfButton
              class="sf-button--full-width color-secondary my-cart__button"
              >Start shopping</SfButton
            >
          </div>
        </template>
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
          qty: "1",
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
      return 0;
      // return this.products.reduce(
      //   (totalItems, product) => totalItems + parseInt(product.qty, 10),
      //   0
      // );
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
  @include for-desktop {
    width: 25.5rem;
  }
  &__title {
    margin: $spacer-extra-big;
  }
  &__summary {
    margin: $spacer-extra-big;
  }
}
.empty-cart {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: $spacer-extra-big;
}
</style>
