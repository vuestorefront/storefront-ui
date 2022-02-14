<template>
  <SfTabs
    class="sf-order-history"
    :open-tab="1"
    :data-testid="dataTestDisplay('order-history-tabs')"
  >
    <SfTab :title="tabTitle" :data-testid="dataTestDisplay('my-orders')">
      <slot
        name="order-history-description"
        v-bind="{ orderHistoryDescription }"
      >
        <p class="message">
          {{ orderHistoryDescription }}
        </p>
      </slot>
      <div v-if="orders && orders.length === 0" class="no-orders">
        <slot name="no-orders" v-bind="{ noOrdersDescription }">
          <p class="no-orders__title">{{ noOrdersDescription }}</p>
          <SfButton class="no-orders__button" @click="$emit('no-orders')">
            {{ noOrdersButtonText }}
          </SfButton>
        </slot>
      </div>
      <div v-else>
        <slot name="table" v-bind="{ tableHeaders, orders }">
          <SfTable class="orders">
            <SfTableHeading>
              <slot name="table-headers">
                <SfTableHeader
                  v-for="tableHeader in tableHeaders"
                  :key="tableHeader"
                  >{{ tableHeader }}
                </SfTableHeader>
                <slot name="action-header">
                  <SfTableHeader class="orders__element--right">
                    <span class="smartphone-only">Download</span>
                    <SfButton
                      class="desktop-only sf-button--text orders__download-all"
                      :data-testid="dataTestDisplay('download-all-button')"
                      @click="$emit('download-all')"
                      >Download all
                    </SfButton>
                  </SfTableHeader>
                </slot>
              </slot>
            </SfTableHeading>
            <SfTableRow v-for="order in ordersHistory" :key="order[0]">
              <slot name="table-data">
                <SfTableData v-for="(data, key) in order" :key="key">
                  <template v-if="key === 4">
                    <span
                      :class="{
                        'text-success': data === 'Finalised',
                        'text-warning': data === 'In process',
                      }"
                      >{{ data }}</span
                    >
                  </template>
                  <template v-else>{{ data }}</template>
                </SfTableData>
                <slot name="action-rows">
                  <SfTableData class="orders__view orders__element--right">
                    <SfButton
                      class="sf-button--text smartphone-only"
                      @click="$emit('download')"
                      >Download</SfButton
                    >
                    <SfButton
                      class="sf-button--text desktop-only"
                      :data-testid="dataTestDisplay('view-details-button')"
                      @click="$emit('view-details')"
                      >View details</SfButton
                    >
                  </SfTableData>
                </slot>
              </slot>
            </SfTableRow>
          </SfTable>
        </slot>
      </div>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs, SfTable, SfButton } from "@storefront-ui/vue";
import { dataTestDisplay } from "../../../utilities/helpers";

export default {
  name: "SfOrderHistory",
  components: {
    SfTabs,
    SfTable,
    SfButton,
  },
  props: {
    tabTitle: {
      type: String,
      default: "My orders",
    },
    orders: {
      type: Array,
      default: () => [
        ["#35765", "4th Nov, 2019", "Visa card", "$12.00", "In process"],
        ["#35766", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
        ["#35768", "4th Nov, 2019", "Mastercard", "$12.00", "Finalised"],
        ["#35769", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
      ],
    },
    tableHeaders: {
      type: Array,
      default: () => [
        "Order ID",
        "Payment date",
        "Payment method",
        "Amount",
        "Status",
      ],
    },
    orderHistoryDescription: {
      type: String,
      default:
        "Check the details and status of your orders in the online store. You can also cancel your order or request a return.",
    },
    noOrdersDescription: {
      type: String,
      default: "You currently have no order history.",
    },
    noOrdersButtonText: {
      type: String,
      default: "Start shopping",
    },
  },
  computed: {
    ordersHistory() {
      return this.orders;
    },
  },
  methods: {
    dataTestDisplay,
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfOrderHistory.scss";
</style>
