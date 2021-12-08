import { SfOrderHistory } from "@storefront-ui/vue";
import { accountData } from "../internalData.js";

export default {
  title: "Components/Templates/OrderHistory",
  component: SfOrderHistory,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "button-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Component with order history. Part of the account.",
      },
    },
  },
  argTypes: {
    tabTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "My orders",
      description: "Label for tab title",
    },
    orders: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: accountData.orders,
      description: "Account data",
    },
    orderHistoryDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue:
        "Check the details and status of your orders in the online store. You can also cancel your order or request a return.",
      description: "Tab description when there are orders",
    },
    noOrdersDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "You currently have no order history.",
      description: "Text when there are no orders",
    },
    noOrdersButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Start shopping",
      description: "Button text when there are no orders",
    },
    tableHeaders: {
      control: "object",
      table: {
        category: "Props",
      },
      description: "Labels for table headers",
      defaultValue: [
        "Order ID",
        "Payment date",
        "Payment method",
        "Amount",
        "Status",
      ],
    },
    downloadAll: {
      name: "download-all",
      action: "download-all event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits download-all event when download all button is clicked",
    },
    noOrders: {
      name: "no-orders",
      action: "no-orders event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits no-orders event when no orders button is clicked",
    },
    viewDetails: {
      name: "view-details",
      action: "view-details event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits view-details event when view details button is clicked",
    },
    download: {
      action: "download event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits download event when download button is clicked in mobile mode",
    },
    ["download-all"]: {
      table: {
        disable: true,
      },
    },
    ["no-orders"]: {
      table: {
        disable: true,
      },
    },
    ["view-details"]: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfOrderHistory },
  template: `
  <SfOrderHistory
    :tabTitle="tabTitle"
    :orders="orders"
    :orderHistoryDescription="orderHistoryDescription"
    :noOrdersDescription="noOrdersDescription"
    :tableHeaders="tableHeaders"
    :noOrdersButtonText="noOrdersButtonText"
    @download-all="this['downloadAll']"
    @no-orders="this['noOrders']"
    @view-details="this['viewDetails']"
    @download="download"
  />`,
});

export const Common = Template.bind({});
