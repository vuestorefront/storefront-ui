<template>
  <div>
    <SfHeading
      title="4. Order review"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <SfTable class="sf-table--bordered table desktop-only">
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
    <SfAccordion first-open class="accordion mobile-only">
      <SfAccordionItem header="Personal Details">
        <div class="accordion__item">
          <div class="accordion__content">
            <p class="content">
              Sviatlana Havaka<br />
              Zielinskiego 30 – 41, 53-345<br />
              Wroclaw, Poland
            </p>
            <p class="content">
              sviatlana.example@gmail.com<br />
              (00) 468 900 300
            </p>
          </div>
          <SfButton class="sf-button--text accordion__edit">Edit</SfButton>
        </div>
      </SfAccordionItem>
      <SfAccordionItem header="Shipping address">
        <div class="accordion__item">
          <div class="accordion__content">
            <p class="content">
              <span class="content__label">Paczkomat Inpost</span><br />
              Zielinskiego 30 – 41, 53-345<br />
              Wroclaw, Poland
            </p>
            <p class="content">
              sviatlana.example@gmail.com<br />
              (00) 468 900 300
            </p>
          </div>
          <SfButton class="sf-button--text accordion__edit">Edit</SfButton>
        </div>
      </SfAccordionItem>
      <SfAccordionItem header="Billing address">
        <div class="accordion__item">
          <div class="accordion__content">
            <p class="content">Same as shipping address</p>
          </div>
          <SfButton class="sf-button--text accordion__edit">Edit</SfButton>
        </div>
      </SfAccordionItem>
      <SfAccordionItem header="Payment method">
        <div class="accordion__item">
          <div class="accordion__content">
            <p class="content">Cash on delivery</p>
          </div>
          <SfButton class="sf-button--text accordion__edit">Edit</SfButton>
        </div>
      </SfAccordionItem>
    </SfAccordion>
    <SfHeading
      title="Order details"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="summary">
      <div class="summary__group">
        <div class="summary__total">
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
            class="sf-property--full-width property--huge summary__property-total"
          >
            <template #name>TOTAL</template>
          </SfProperty>
        </div>
        <SfCheckbox v-model="terms" name="terms" class="summary__terms">
          <template #label>
            <div class="sf-checkbox__label">
              I agree to <a href="#">Terms and conditions</a>
            </div>
          </template>
        </SfCheckbox>
      </div>
      <div class="summary__group">
        <SfButton class="sf-button--full-width summary__action-button"
          >Place my order</SfButton
        >
        <SfButton
          class="sf-button--full-width sf-button--text summary__action-button summary__action-button--secondary"
          @click="$emit('click:back')"
        >
          Go back to Payment
        </SfButton>
      </div>
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
  SfProperty,
  SfAccordion
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
    SfProperty,
    SfAccordion
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
.table {
  margin-bottom: $spacer-big;
  &__header {
    font-size: $font-size-regular-desktop;
    font-weight: $body-font-weight-primary;
    @include for-desktop {
      text-align: center;
    }
  }
  &__data {
    font-size: $font-size-small-desktop;
    text-align: center;
  }
  &__image {
    @include for-desktop {
      flex: 0 0 5.125rem;
    }
  }
  &__action {
    @include for-desktop {
      flex: 0 0 2.5rem;
    }
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.accordion {
  margin: 0 0 $spacer-extra-big 0;
  &__item {
    display: flex;
    align-items: flex-start;
  }
  &__content {
    flex: 1;
  }
  &__edit {
    flex: unset;
  }
}
.summary {
  background-color: $c-light;
  margin: 0 -#{$spacer-big};
  padding: $spacer-big;
  @include for-desktop {
    background-color: transparent;
  }
  &__group {
    @include for-desktop {
      display: flex;
      margin: 0 0 $spacer-extra-big 0;
    }
  }
  &__terms {
    flex: 1;
    order: -1;
    margin-bottom: $spacer-big;
  }
  &__total {
    margin: 0 0 $spacer-extra-big 0;
    padding: 0 $spacer-big;
    flex: 0 0 16.875rem;
    @include for-desktop {
      padding: 0;
    }
  }
  &__action-button {
    flex: 1;
    &--secondary {
      margin: $spacer-big 0;
      @include for-desktop {
        order: -1;
        margin: 0;
        text-align: left;
      }
    }
  }
  &__property-total {
    margin: $spacer-big 0 0 0;
    text-transform: uppercase;
    font-size: $font-size-regular-desktop;
    line-height: 1.6;
    font-weight: 500;
  }
}
.button {
  cursor: pointer;
}
.property {
  margin: 0 0 $spacer 0;
  font-size: $font-size-small-desktop;
  line-height: 1.6;
  &__name {
    color: $c-text-muted;
  }
}
.content {
  margin: 0 0 $spacer-big 0;
  color: $c-text;
  font-size: $font-size-extra-small-desktop;
  font-weight: 300;
  line-height: 1.6;
  &:last-child {
    margin: 0;
  }
  &__label {
    font-weight: 400;
  }
}
/* TABLE */
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
</style>
