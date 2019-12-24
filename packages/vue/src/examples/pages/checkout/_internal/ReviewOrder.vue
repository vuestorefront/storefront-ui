<template>
  <div>
    <SfHeading
      title="4. Order details"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <SfTable class="sf-table--bordered table">
      <SfTableHeading class="table__row">
        <SfTableHeader class="table__header table__image">Item</SfTableHeader>
        <SfTableHeader
          v-for="tableHeader in tableHeaders"
          :key="tableHeader"
          class="table__header"
          >{{ tableHeader }}</SfTableHeader
        >
        <SfTableHeader class="table__action"></SfTableHeader>
      </SfTableHeading>
      <SfTableRow class="table__row">
        <SfTableData class="table__image">
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
          <SfPrice regular="$50.00" class="product-price" />
        </SfTableData>
        <SfTableData class="table__action">
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
      <SfTableRow class="table__row">
        <SfTableData class="table__image">
          <SfImage src="/assets/storybook/checkoutpage/product.png" />
        </SfTableData>
        <SfTableData class="table__data">
          <div class="product-title">Summer Bag</div>
          <div class="product-sku">MSD23-345-324</div>
        </SfTableData>
        <SfTableData class="table__data">Cream</SfTableData>
        <SfTableData class="table__data">One size</SfTableData>
        <SfTableData class="table__data">1</SfTableData>
        <SfTableData class="table__data">
          <SfPrice regular="$150.00" special="$100.00" class="product-price" />
        </SfTableData>
        <SfTableData class="table__action">
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
      <SfButton class="sf-button--full-width form__action-button">Place my order</SfButton>
      <SfButton
        class="sf-button--full-width sf-button--text form__action-button form__action-button--secondary"
        @click="$emit('click:back')"
      >Go back to Payment</SfButton
      >
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
      tableHeaders: ["Description", "Colour", "Size", "Quantity", "Amount"]
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
  &__action-button {
    flex: 1;
    &--secondary{
      margin: $spacer-big 0;
      @include for-desktop{
        order: -1;
        margin: 0;
        text-align: left;
      }
    }
  }
}
.table {
  margin-bottom: $spacer-big;
  &__header {
    font-size: $font-size-regular-desktop;
    font-weight: $body-font-weight-primary;
    text-align: center;
  }
  &__data {
    font-size: $font-size-small-desktop;
    text-align: center;
  }
  &__image {
    flex: 0 0 5.125rem;
  }
  &__action {
    flex: 0 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
