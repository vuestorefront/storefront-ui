<template>
  <SfTabs
    class="sf-order-history"
    :open-tab="1"
    data-testid="order-history-tabs"
  >
    <SfTab :title="tabTitle" data-testid="my-orders">
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
                      data-testid="download-all-button"
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
                      data-testid="view-details-button"
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
import { SfTabs, SfTable, SfButton } from "@storefront-ui/vue"
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
      type: Object,
      default: () => ({}),
    },
    tableHeaders: {
      type: Object,
      default: () => [],
    },
    orderHistoryDescription: {
      type: String,
      default: "",
    },
    noOrdersDescription: {
      type: String,
      default: "",
    },
    noOrdersButtonText: {
      type: String,
      default: "Start shopping",
    },
  },
  computed: {
    ordersHistory() {
      return this.orders
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/my-account/SfOrderHistory.scss";
</style>
