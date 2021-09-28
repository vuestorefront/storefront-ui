<template>
  <SfTabs
    class="sf-order-history"
    :open-tab="1"
    data-testid="order-history-tabs"
  >
    <SfTab title="My orders" data-testid="my-orders">
      <slot name="message-order-history" v-bind="{ orderHistoryDescription }">
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
                <slot name="last-column-header">
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
            <SfTableRow v-for="order in orders" :key="order[0]">
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
                <slot name="last-column-data">
                  <SfTableData class="orders__view orders__element--right">
                    <SfButton class="sf-button--text smartphone-only"
                      >Download</SfButton
                    >
                    <SfButton
                      class="sf-button--text desktop-only"
                      data-testid="view-details-button"
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
    <SfTab title="Returns" data-testid="returns">
      <p class="message">
        <slot name="returns">
          This feature is not implemented yet! Please take a look at<br />
          <a href="#"
            >https://github.com/DivanteLtd/vue-storefront/issues for our
            Roadmap!</a
          >
        </slot>
      </p>
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
    account: {
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
    orders() {
      return this.account.orders
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.no-orders {
  &__title {
    margin: 0 0 var(--spacer-base) 0;
  }
  &__button {
    --button-width: 100%;
    margin: var(--spacer-2xl) 0 0 0;
    @include for-desktop {
      --button-width: 17.375rem;
    }
  }
}
.orders {
  @include for-desktop {
    &__element {
      &--right {
        text-align: right;
      }
    }
  }
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-dark-variant);
}
a {
  color: var(--c-primary);
  font-weight: var(--font-weight--medium);
  text-decoration: none;
  &:hover {
    color: var(--c-text);
  }
}
</style>
