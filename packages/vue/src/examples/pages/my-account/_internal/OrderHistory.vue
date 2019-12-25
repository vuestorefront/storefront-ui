<template>
  <SfTabs :open-tab="1">
    <SfTab title="My orders">
      <p class="message">
        Check the details and status of your orders in the online store. You can
        also cancel your order or request a return.
      </p>
      <div v-if="false" class="orders">
        <p class="orders__title">You currently have no orders</p>
        <p class="orders__message">Best get shopping pronto...</p>
        <SfButton class="orders__button">Start shopping</SfButton>
      </div>
      <SfTable v-else class="orders">
        <SfTableHeading>
          <SfTableHeader
            v-for="tableHeader in tableHeaders"
            :key="tableHeader"
            >{{ tableHeader }}</SfTableHeader
          >
          <SfTableHeader>
            <SfButton class="desktop-only button-download-all"
              >Download all</SfButton
            >
            <span class="mobile-only">Download All</span>
          </SfTableHeader>
        </SfTableHeading>
        <SfTableRow v-for="order in orders" :key="order['Order ID']">
          <SfTableData v-for="data in Object.keys(order)" :key="order[data]">
            <template v-if="data === 'Status'">
              <span
                :class="{
                  'text-success': order[data] === 'Finalised',
                  'text-warning': order[data] === 'In process'
                }"
                >{{ order[data] }}</span
              >
            </template>
            <template v-else>{{ order[data] }}</template>
          </SfTableData>
          <SfTableData>VIEW</SfTableData>
        </SfTableRow>
      </SfTable>
    </SfTab>
    <SfTab title="Returns" />
  </SfTabs>
</template>

<script>
import { SfTabs, SfTable, SfButton } from "../../../../../index.js";
export default {
  name: "PersonalDetails",
  components: {
    SfTabs,
    SfTable,
    SfButton
  },
  data() {
    return {
      orders: [
        {
          "Order ID": "#35765",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Visa card",
          Amount: "$12.00",
          Status: "In process"
        },
        {
          "Order ID": "#35766",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Paypal",
          Amount: "$12.00",
          Status: "Finalised"
        },
        {
          "Order ID": "#35767",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Visa card",
          Amount: "$12.00",
          Status: "Finalised"
        },
        {
          "Order ID": "#35768",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Mastercard",
          Amount: "$12.00",
          Status: "Finalised"
        },
        {
          "Order ID": "#35769",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Paypal",
          Amount: "$12.00",
          Status: "Finalised"
        }
      ]
    };
  },
  computed: {
    tableHeaders() {
      return Object.keys(this.orders[0]);
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
.message {
  margin: 0 0 $spacer-extra-big 0;
  font-size: $font-size-regular-desktop;
  font-family: $body-font-family-primary;
  font-weight: $body-font-weight-primary;
  line-height: 1.6;
}
</style>
