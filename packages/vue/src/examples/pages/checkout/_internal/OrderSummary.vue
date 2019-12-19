<template>
  <div>
    <div class="highlighted">
      <SfHeading
        title="Order summary"
        class="sf-heading--left sf-heading--no-underline"
      />
      <div
        style="display: flex; align-items: center; justify-content: space-between"
      >
        <h3 class="my-cart__total-items">Total items: {{ totalItems }}</h3>
        <SfButton class="sf-button--text">Hide items list</SfButton>
      </div>
      <div style="margin: 0 -20px">
        <SfCollectedProduct
          v-for="product in products"
          :key="product.id"
          v-model="product.qty"
          :image="product.image"
          :title="product.title"
          :regular-price="product.price.regular | price"
          :special-price="product.price.special | price"
          :stock="product.stock"
          class="collected-product"
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
      </div>
    </div>
    <div></div>
    <div class="highlighted">
      <SfCharacteristic
        v-for="characteristic in characteristics"
        :key="characteristic.title"
        :title="characteristic.title"
        :description="characteristic.description"
        :icon="characteristic.icon"
        class="characteristic"
      />
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfCollectedProduct,
  SfProperty,
  SfCharacteristic
} from "../../../../../index.js";
export default {
  name: "OrderSummary",
  filters: {
    price: function(price) {
      if (!price) return;
      return `$${price}`;
    }
  },
  components: {
    SfHeading,
    SfButton,
    SfCollectedProduct,
    SfProperty,
    SfCharacteristic
  },
  data() {
    return {
      totalItems: 2,
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
        }
      ],
      characteristics: [
        {
          title: "Safety",
          description: "It carefully packaged with a personal touch",
          icon: "clock"
        },
        {
          title: "Easy shipping",
          description:
            "You’ll receive dispatch confirmation and an arrival date",
          icon: "clock"
        },
        {
          title: "Changed your mind?",
          description: "Rest assured, we offer free returns within 30 days",
          icon: "clock"
        }
      ]
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
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background-color: #f1f2f3;
  padding: $spacer-extra-big;
  &:not(:last-child) {
    margin-bottom: $spacer-big;
  }
}
.collected-product{
  &:not(:last-child) {
    margin-bottom: $spacer-big;
  }
}
.characteristic {
  &:not(:last-child) {
    margin-bottom: $spacer-big;
  }
}
</style>
