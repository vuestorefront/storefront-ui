<template>
  <div id="detailed-cart">
    <div class="detailed-cart">
      <div class="detailed-cart__aside">
        <OrderSummary
          :products="products"
          :shipping-methods="shippingMethods"
          :total-items="totalItems"
        />
      </div>
      <transition name="fade" mode="out-in">
        <div key="detailed-cart" class="detailed-cart__main">
          <SfBreadcrumbs
            class="breadcrumbs desktop-only"
            :breadcrumbs="breadcrumbs"
          />
          <div v-if="totalItems" class="collected-product-list">
            <transition-group name="fade" tag="div">
              <SfCollectedProduct
                v-for="product in products"
                :key="product.id"
                v-model="product.qty"
                :image="product.image"
                :title="product.title"
                :regular-price="product.price.regular | price"
                :special-price="product.price.special | price"
                class="sf-collected-product--detailed collected-product"
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
                  <SfButton class="sf-button--text actions__button desktop-only"
                    >Edit</SfButton
                  >
                  <SfButton class="sf-button--text actions__button desktop-only"
                    >Save for later</SfButton
                  >
                  <SfButton class="sf-button--text actions__button desktop-only"
                    >Add to compare</SfButton
                  >
                  <SfButton class="sf-button--text actions__button desktop-only"
                    >Add message or gift wrap</SfButton
                  >
                </template>
              </SfCollectedProduct>
            </transition-group>
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
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import {
  SfCollectedProduct,
  SfButton,
  SfProperty,
  SfBreadcrumbs
} from "@storefront-ui/vue";
import { OrderSummary } from "./_internal/index.js";

export default {
  name: "DetailedCart",
  components: {
    SfCollectedProduct,
    SfBreadcrumbs,
    SfButton,
    SfProperty,
    OrderSummary
  },
  filters: {
    price: function(price) {
      if (!price) return;
      return `$${price}`;
    }
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#"
          }
        },
        {
          text: "Cart",
          route: {
            link: "#"
          }
        }
      ],
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
      ],
      shippingMethods: [
        {
          isOpen: false,
          price: "Free",
          delivery: "Delivery from 3 to 7 business days",
          label: "Pickup in the store",
          value: "store",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$15.90",
          delivery: "Delivery from 4 to 6 business days",
          label: "Delivery to home",
          value: "home",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$9.90",
          delivery: "Delivery from 4 to 6 business days",
          label: "Paczkomaty InPost",
          value: "inpost",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$11.00",
          delivery: "Delivery within 48 hours",
          label: "48 hours coffee",
          value: "coffee",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        },
        {
          isOpen: false,
          price: "$14.00",
          delivery: "Delivery within 24 hours",
          label: "Urgent 24h",
          value: "urgent",
          description:
            "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
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

#detailed-cart {
  box-sizing: border-box;
  padding: 0 var(--spacer-big);
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.breadcrumbs {
  padding: var(--spacer-base) 0;
}
.detailed-cart {
  @include for-desktop {
    display: flex;
  }
  &__main {
    padding: 0 var(--spacer-sm);
    @include for-desktop {
      flex: 1;
    }
  }
  &__aside {
    box-sizing: border-box;
    width: 100%;
    background: var(--c-light);
    padding: var(--spacer-xl);

    @include for-desktop {
      flex: 0 0 25.5rem;
      order: 1;
      margin: 0 0 0 var(--spacer-lg);
    }
  }
}
.collected-product {
  --collected-product-padding: var(--spacer-sm) 0;
  --collected-product-remove-bottom: var(--spacer-sm);
  border: 1px solid var(--c-light);
  border-width: 1px 0 0 0;
  @include for-mobile {
    &:first-of-type {
      border: none;
    }
  }
  @include for-desktop {
    --collected-product-padding: var(--spacer-lg) 0;
    --collected-product-remove-bottom: var(--spacer-lg);
  }
}
.actions {
  &__button {
    margin: 0 0 var(--spacer-base) 0;
  }
}
</style>
