<template>
  <SfTabs :open-tab="1">
    <SfTab title="My orders">
      <p class="message">
        Check the details and status of your orders in the online store. You can
        also cancel your order or request a return.
      </p>
      <div v-if="false" class="no-orders">
        <p class="no-orders__title">You currently have no orders</p>
        <p class="no-orders__content">Best get shopping pronto...</p>
        <SfButton class="no-orders__button">Start shopping</SfButton>
      </div>
      <SfTable v-else class="orders">
        <SfTableHeading>
          <SfTableHeader
            v-for="tableHeader in tableHeaders"
            :key="tableHeader"
            >{{ tableHeader }}</SfTableHeader
          >
          <SfTableHeader>
            <span class="mobile-only">Download All</span>
            <SfButton class="desktop-only orders__download-all"
              >Download all</SfButton
            >
          </SfTableHeader>
        </SfTableHeading>
        <SfTableRow v-for="order in orders" :key="order[0]">
          <SfTableData v-for="(data, key) in order" :key="key">
            <template v-if="key === 4">
              <span
                :class="{
                  'text-success': data === 'Finalised',
                  'text-warning': data === 'In process'
                }"
                >{{ data }}</span
              >
            </template>
            <template v-else>{{ data }}</template>
          </SfTableData>
          <SfTableData class="orders__view">
            <SfButton class="sf-button--text">VIEW</SfButton>
          </SfTableData>
        </SfTableRow>
      </SfTable>
    </SfTab>
    <SfTab title="Returns">
      <p class="message">
        This feature is not implemented yet! Please take a look at<br />
        <a href="#"
          >https://github.com/DivanteLtd/vue-storefront/issues for our
          Roadmap!</a
        >
      </p>
    </SfTab>
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
        ["#35765", "4th Nov, 2019", "Visa card", "$12.00", "In process"],
        ["#35766", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
        ["#35768", "4th Nov, 2019", "Mastercard", "$12.00", "Finalised"],
        ["#35769", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"]
      ],
      tableHeaders: [
        "Order ID",
        "Payment date",
        "Payment method",
        "Amount",
        "Status"
      ]
    };
  },
  computed: {}
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
.no-orders {
  &__title,
  &__content {
    font-family: $body-font-family-secondary;
    font-size: $font-size-regular-desktop;
    line-height: 1.6;
  }
  &__title {
    margin: 0 0 $spacer-big 0;
    font-weight: 500;
  }
  &__content {
    margin: 0 0 $spacer-extra-big 0;
    font-weight: 300;
  }
  &__button {
    width: 100%;
    @include for-desktop {
      width: auto;
    }
  }
}
.orders {
  &__download-all {
    padding: 10px 1.25rem;
    font-size: 0.75rem;
    white-space: nowrap;
  }
  &__view {
    text-align: center;
  }
}
</style>
