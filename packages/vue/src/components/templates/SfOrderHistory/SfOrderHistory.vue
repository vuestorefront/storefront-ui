<template>
  <SfTabs :open-tab="1" data-testid="order-history-tabs">
    <SfTab title="My orders" data-testid="my-orders">
      <p class="message">
        Check the details and status of your orders in the online store. You can
        also cancel your order or request a return.
      </p>
      <div v-if="orders.length === 0" class="no-orders">
        <p class="no-orders__title">You currently have no order history.</p>
        <SfButton class="no-orders__button">Start shopping</SfButton>
      </div>
      <SfTable v-else class="orders">
        <SfTableHeading>
          <SfTableHeader v-for="tableHeader in tableHeaders" :key="tableHeader"
            >{{ tableHeader }}
          </SfTableHeader>
          <SfTableHeader class="orders__element--right">
            <span class="smartphone-only">Download</span>
            <SfButton
              class="desktop-only sf-button--text orders__download-all"
              data-testid="download-all-button"
              >Download all
            </SfButton>
          </SfTableHeader>
        </SfTableHeading>
        <SfTableRow v-for="order in orders" :key="order[0]">
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
          <SfTableData class="orders__view orders__element--right">
            <SfButton class="sf-button--text color-secondary smartphone-only"
              >Download</SfButton
            >
            <SfButton
              class="sf-button--text color-secondary desktop-only"
              data-testid="view-details-button"
              >View details</SfButton
            >
          </SfTableData>
        </SfTableRow>
      </SfTable>
    </SfTab>
    <SfTab title="Returns" data-testid="returns">
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
import { SfTabs, SfTable, SfButton } from "@storefront-ui/vue";
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
  },
  data() {
    return {
      tableHeaders: [
        "Order ID",
        "Payment date",
        "Payment method",
        "Amount",
        "Status",
      ],
    };
  },
  computed: {
    orders() {
      return this.account.orders;
    },
  },
};
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
