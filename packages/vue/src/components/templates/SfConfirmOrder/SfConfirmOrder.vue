<template>
  <div class="sf-confirm-order">
    <slot name="heading">
      <SfHeading
        :title="orderTitle"
        :level="orderTitleLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <slot name="table">
      <SfTable class="sf-table--bordered table">
        <SfTableHeading class="table__row">
          <SfTableHeader class="table__header table__image">Item</SfTableHeader>
          <SfTableHeader
            v-for="tableHeader in tableHeaders"
            :key="tableHeader"
            class="table__header"
            :class="{ table__description: tableHeader === 'Description' }"
            >{{ tableHeader }}
          </SfTableHeader>
        </SfTableHeading>
        <SfTableRow
          v-for="(product, index) in orderItems"
          :key="index"
          class="table__row"
          data-testid="product-table-row"
        >
          <SfTableData class="table__image">
            <SfImage
              :src="product.image"
              :alt="product.title"
              data-testid="product-image-table-data"
            />
          </SfTableData>
          <SfTableData class="table__data"
            >{{ product.configuration[0].value }}
          </SfTableData>
          <SfTableData
            class="table__description"
            data-testid="product-description-table-data"
          >
            <div class="product-title">{{ product.title }}</div>
            <div class="product-sku">{{ product.sku }}</div>
          </SfTableData>
          <SfTableData class="table__data">{{ product.qty }}</SfTableData>

          <SfTableData class="table__data"
            >{{ product.configuration[1].value }}
          </SfTableData>
          <SfTableData class="table__data">
            <SfPrice
              :regular="product.price.regular"
              :special="product.price.special"
              class="product-price"
            />
          </SfTableData>
        </SfTableRow>
      </SfTable>
    </slot>
    <div class="totals">
      <slot name="desktop-summary">
        <SfProperty
          name="Subtotal"
          :value="subtotal"
          class="sf-property--full-width property property__subtotal"
        >
        </SfProperty>
        <SfProperty
          name="Shipping"
          :value="shippingMethod.price"
          class="sf-property--full-width property"
        >
        </SfProperty>
        <SfDivider class="divider" />
        <SfProperty
          name="Total price"
          :value="total"
          class="sf-property--full-width sf-property--large property__total"
        >
        </SfProperty>
        <slot name="checkbox">
          <SfCheckbox v-model="terms" name="terms" class="totals__terms">
            <template #label>
              <div class="sf-checkbox__label">
                I agree to <SfLink href="#">Terms and conditions</SfLink>
              </div>
            </template>
          </SfCheckbox>
        </slot>
      </slot>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfTable,
  SfCheckbox,
  SfDivider,
  SfImage,
  SfPrice,
  SfProperty,
  SfLink,
} from "@storefront-ui/vue"
export default {
  name: "SfConfirmOrder",
  components: {
    SfHeading,
    SfTable,
    SfCheckbox,
    SfDivider,
    SfImage,
    SfPrice,
    SfProperty,
    SfLink,
  },
  props: {
    orderTitle: {
      type: String,
      default: "Order details",
    },
    orderTitleLevel: {
      type: Number,
      default: 3,
    },
    order: {
      type: Object,
      default: () => ({}),
    },
    tableHeaders: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      terms: false,
    }
  },
  computed: {
    orderItems() {
      return this.order.orderItems
    },
    shipping() {
      return this.order.shipping
    },
    shippingMethod() {
      return this.shipping.shippingMethod || {};
    },
    subtotal() {
      const orderItems = this.orderItems
      const subtotal = this.orderItems
        ? orderItems.reduce((previous, current) => {
            const qty = current.qty
            const price = current.price.special
              ? current.price.special
              : current.price.regular
            const total = qty * parseFloat(price.replace("$", ""))
            return previous + total
          }, 0)
        : 0
      return "$" + subtotal.toFixed(2)
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""))
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""))
      const total = subtotal + (isNaN(shipping) ? 0 : shipping)
      return "$" + total.toFixed(2)
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-xl) 0 var(--spacer-base);
  --heading-title-font-weight: var(--font-weight--bold);
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.table {
  --table-row-padding: var(--spacer-sm) 0 var(--spacer-xs);
  &__header:last-child,
  :nth-of-type(5) {
    text-align: right;
  }
  &__header:nth-of-type(odd),
  .sf-table__data:nth-of-type(odd) {
    padding-bottom: var(--spacer-sm);
  }
  &__row {
    justify-content: space-between;
  }
  &__data:nth-of-type(5) {
    text-align: right;
  }
  &__image {
    --image-width: 2.75rem;
    text-align: left;
  }
  @include for-desktop {
    margin: 0 0 var(--spacer-base) 0;
    --table-heading-padding: var(--spacer-sm) 0;
    &__header {
      &:last-of-type {
        margin-right: var(--spacer-xs);
      }
      &:nth-of-type(5) {
        text-align: left;
      }
      &__description {
        order: -1;
      }
    }
    &__header:nth-of-type(odd),
    .sf-table__data:nth-of-type(odd) {
      padding-bottom: 0;
    }
    &__data {
      &:nth-of-type(5) {
        text-align: left;
      }
      &:last-of-type {
        margin-right: var(--spacer-xs);
      }
    }
    &__description {
      text-align: left;
      flex: 0 0 15rem;
      order: -1;
    }
    &__image {
      --image-width: 5.125rem;
      order: -1;
      text-align: center;
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}
.product-sku {
  font-family: var(--font-family--primary);
  color: var(--c-text-muted);
  @include for-desktop {
    margin-top: var(--spacer-sm);
  }
}
.product-price {
  --price-regular-font-size: var(--font-size--base);
  --price-regular-font-weight: var(--font-weight--normal);
  --price-special-font-weight: var(--font-weight--normal);
  text-align: right;
  display: flex;
  flex-direction: column;
  ::v-deep .sf-price__old {
    display: none;
  }
}
.totals {
  &__terms {
    margin-top: var(--spacer-xl);
    --link-color: var(--c-link);
    --link-font-family: var(--font-family--primary);
    --link-font-weight: var(--font-weight--normal);
  }
  &__element:first-child {
    margin-bottom: var(--spacer-base);
  }
}
.property {
  margin: 0 0 var(--spacer-base) 0;
  --property-name-font-weight: var(--font-weight--medium);
  --property-name-font-size: var(--font-size--lg);
  --property-value-font-weight: var(--font-weight--bold);
  --property-value-font-size: var(--h4-font-size);
  &__total {
    margin: 0 0 var(--spacer-xl) 0;
    --property-name-color: var(--c-text);
  }
  @include for-desktop {
    margin: 0 0 var(--spacer-sm) 0;
    &__subtotal {
      margin: var(--spacer-xl) 0 var(--spacer-base);
    }
    &__total {
      --property-name-font-weight: var(--font-weight--bold);
      --property-name-font-size: var(--h4-font-size);
      --property-value-font-weight: var(--font-weight--bold);
      --property-value-font-size: var(--h4-font-size);
      padding: var(--spacer-base) 0 0 0;
    }
  }
}
.divider {
  --divider-border-color: var(--c-primary);
  --divider-width: 100%;
  --divider-margin: 0 0 var(--spacer-base) 0;
}
.summary {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacer-xl) 0;
  }
  &__terms {
    margin: 0 0 0 var(--spacer-xs);
  }
}
.content {
  margin: 0 0 var(--spacer-base) 0;
  color: var(--c-text);
  &__label {
    font-weight: var(--font-weight--normal);
  }
}
</style>
