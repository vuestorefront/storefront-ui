<template>
  <div>
    <SfHeading
      title="4. Order details"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <SfTable class="table">
      <SfTableRow>
        <SfTableHeader
          v-for="tableHeader in tableHeaders"
          :key="tableHeader"
          class="table__header"
          >{{ tableHeader }}</SfTableHeader
        >
        <SfTableHeader></SfTableHeader>
      </SfTableRow>
      <SfTableRow>
        <SfTableData>
          <SfImage src="/assets/storybook/checkoutpage/product.png" />
        </SfTableData>
        <SfTableData class="table__data table__data--left">
          <div class="product-title">Summer Bag</div>
          <div class="product-sku">MSD23-345-324</div>
        </SfTableData>
        <SfTableData class="table__data">Cream</SfTableData>
        <SfTableData class="table__data">One size</SfTableData>
        <SfTableData class="table__data">1</SfTableData>
        <SfTableData class="table__data">
          <SfPrice regular="$50" class="product-price" />
        </SfTableData>
        <SfTableData>
          <SfIcon
            icon="cross"
            size="xxs"
            color="#BEBFC4"
            role="button"
            class="button"
            @click="removeItem"
          />
        </SfTableData>
      </SfTableRow>
      <SfTableRow>
        <SfTableData>
          <SfImage src="/assets/storybook/checkoutpage/product.png" />
        </SfTableData>
        <SfTableData class="table__data table__data--left">
          <div class="product-title">Summer Bag</div>
          <div class="product-sku">MSD23-345-324</div>
        </SfTableData>
        <SfTableData class="table__data">Cream</SfTableData>
        <SfTableData class="table__data">One size</SfTableData>
        <SfTableData class="table__data">1</SfTableData>
        <SfTableData class="table__data">
          <SfPrice regular="$150" special="$100" class="product-price" />
        </SfTableData>
        <SfTableData>
          <SfIcon
            icon="cross"
            size="xxs"
            color="#BEBFC4"
            role="button"
            class="button"
            @click="removeItem"
          />
        </SfTableData>
      </SfTableRow>
    </SfTable>
    <div class="summary">
      <SfCheckbox v-model="terms" name="terms" class="summary__column">
        <template #label>
          <div class="sf-checkbox__label">
            I agree to <a href="#">Terms and conditions</a>
          </div>
        </template>
      </SfCheckbox>
      <div class="summary__column summary__column--small ">
        <SfProperty
          name="Subtotal"
          value="$150.00"
          class="sf-property--full-width property"
        >
          <template #name
            ><span class="property__name">Subtotal</span></template
          >
        </SfProperty>
        <SfProperty
          name="Shipping"
          value="$9.90"
          class="sf-property--full-width property"
        >
          <template #name
            ><span class="property__name">Shipping</span></template
          >
        </SfProperty>
        <SfProperty
          name="Total"
          value="$150.00"
          class="sf-property--full-width property property--huge summary__total"
        >
          <template #name>TOTAL</template>
        </SfProperty>
      </div>
    </div>
    <div class="form">
      <SfButton
        class="sf-button--text form__action form__action--left"
        @click="$emit('click:back')"
        >Go back to Payment</SfButton
      >
      <SfButton>Place my order</SfButton>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfTable,
  SfCheckbox,
  SfButton,
  SfImage,
  SfIcon,
  SfPrice,
  SfProperty
} from "../../../../../index.js";
export default {
  name: "ReviewOrder",
  components: {
    SfHeading,
    SfTable,
    SfCheckbox,
    SfButton,
    SfImage,
    SfIcon,
    SfPrice,
    SfProperty
  },
  data() {
    return {
      terms: false,
      tableHeaders: [
        "Item",
        "Description",
        "Colour",
        "Size",
        "Quantity",
        "Amount"
      ]
    };
  },
  methods: {
    removeItem() {
      console.log("remove item from order");
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
.title {
  margin-bottom: $spacer-extra-big;
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__action {
    flex: none;
    margin-left: auto;
    &--left {
      margin-left: unset;
      margin-right: auto;
    }
  }
}
.table {
  margin-bottom: $spacer-big;
  &__header {
    font-size: $font-size-regular-desktop;
    font-weight: $body-font-weight-primary;
  }
  &__data {
    justify-content: flex-start;
    font-size: $font-size-small-desktop;
    &--left {
      align-items: flex-start;
    }
  }
}
.summary {
  display: flex;
  margin-bottom: $spacer-extra-big;
  &__column {
    flex: 1;
    &--small {
      flex: 0 0 18.75rem;
    }
  }
  &__total {
    margin-top: $spacer-big;
  }
}
.property {
  font-size: $font-size-small-desktop;
  line-height: 1.6;
  &--huge {
    text-transform: uppercase;
    font-size: $font-size-regular-desktop;
    font-weight: 500;
  }
  &__name {
    color: $c-text-muted;
  }
}
.product-title,
.product-sku {
  line-height: 1.6;
}
.product-title {
}
.product-sku {
  color: $c-text-muted;
  font-size: $font-size-extra-small-desktop;
}
.product-price {
  display: flex;
  flex-direction: column;
  font-size: $font-size-small-desktop;
  ::v-deep .sf-price__special {
    order: 1;
    color: $c-text;
  }
}
.button {
  cursor: pointer;
}
</style>
