<template>
  <div class="sf-confirm-order">
    <slot name="heading">
      <SfHeading
        :title="orderTitle"
        :level="orderTitleLevel"
        class="
          sf-heading--left sf-heading--no-underline
          sf-confirm-order__heading
        "
      />
    </slot>
    <slot name="table">
      <SfTable class="sf-table--bordered sf-confirm-order__table">
        <SfTableHeading class="sf-confirm-order__table-row">
          <SfTableHeader
            class="sf-confirm-order__table-header sf-confirm-order__table-image"
            >Item</SfTableHeader
          >
          <SfTableHeader
            v-for="tableHeader in tableHeaders"
            :key="tableHeader"
            class="sf-confirm-order__table-header"
            :class="{
              'sf-confirm-order__table-description':
                tableHeader === 'Description',
            }"
            >{{ tableHeader }}
          </SfTableHeader>
        </SfTableHeading>
        <SfTableRow
          v-for="(product, index) in orderItems"
          :key="index"
          class="sf-confirm-order__table-row"
          data-testid="product-table-row"
        >
          <SfTableData class="sf-confirm-order__table-image">
            <SfImage
              :src="product.image"
              :alt="product.title"
              data-testid="product-image-table-data"
            />
          </SfTableData>
          <SfTableData class="sf-confirm-order__table-data"
            >{{ product.configuration[0].value }}
          </SfTableData>
          <SfTableData
            class="sf-confirm-order__table-description"
            data-testid="product-description-table-data"
          >
            <div class="sf-confirm-order__product-title">
              {{ product.title }}
            </div>
            <div class="sf-confirm-order__product-sku">{{ product.sku }}</div>
          </SfTableData>
          <SfTableData class="sf-confirm-order__table-data">{{
            product.qty
          }}</SfTableData>

          <SfTableData class="sf-confirm-order__table-data"
            >{{ product.configuration[1].value }}
          </SfTableData>
          <SfTableData class="sf-confirm-order__table-data">
            <SfPrice
              :regular="product.price.regular"
              :special="product.price.special"
              class="sf-confirm-order__product-price"
            />
          </SfTableData>
        </SfTableRow>
      </SfTable>
    </slot>
    <div class="sf-confirm-order__totals">
      <slot name="summary">
        <SfProperty
          name="Subtotal"
          :value="subtotal"
          class="
            sf-property--full-width
            sf-confirm-order__property sf-confirm-order__property-subtotal
          "
        >
        </SfProperty>
        <SfProperty
          name="Shipping"
          :value="shippingMethod.price"
          class="sf-property--full-width sf-confirm-order__property"
        >
        </SfProperty>
        <SfDivider class="sf-confirm-order__divider" />
        <SfProperty
          name="Total price"
          :value="total"
          class="
            sf-property--full-width sf-property--large
            sf-confirm-order__property-total
          "
        >
        </SfProperty>
        <slot name="checkbox">
          <SfCheckbox
            v-model="terms"
            name="terms"
            class="sf-confirm-order__totals-terms"
          >
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
} from "@storefront-ui/vue";
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
    };
  },
  computed: {
    orderItems() {
      return this.order.orderItems;
    },
    shipping() {
      return this.order.shipping;
    },
    shippingMethod() {
      return this.shipping.shippingMethod;
    },
    subtotal() {
      const orderItems = this.orderItems;
      const subtotal = this.orderItems
        ? orderItems.reduce((previous, current) => {
            const qty = current.qty;
            const price = current.price.special
              ? current.price.special
              : current.price.regular;
            const total = qty * parseFloat(price.replace("$", ""));
            return previous + total;
          }, 0)
        : 0;
      return "$" + subtotal.toFixed(2);
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""));
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""));
      const total = subtotal + (isNaN(shipping) ? 0 : shipping);
      return "$" + total.toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfConfirmOrder.scss";
</style>
