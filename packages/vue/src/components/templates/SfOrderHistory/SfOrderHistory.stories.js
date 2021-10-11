import { SfOrderHistory } from "@storefront-ui/vue";
import { accountData } from "../internalData.js";

export default {
  title: "Components/Templates/OrderHistory",
  component: SfOrderHistory,
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
  />`,
});

export const Common = Template.bind({});
