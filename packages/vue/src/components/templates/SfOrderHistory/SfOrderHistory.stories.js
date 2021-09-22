import { SfOrderHistory } from "@storefront-ui/vue";
import { accountData } from "../internalData.js";

export default {
  title: "Components/Templates/MyAccount/OrderHistory",
  component: SfOrderHistory,
  argTypes: {
    account: {
      control: "object",
      table: {
        category: "Props",
        defaultValue: {
          summary: "{}",
        },
      },
      defaultValue: "",
      description: "Account data",
    },
    orderHistoryDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Tab description when there are orders",
    },
    noOrdersDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
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
        defaultValue: {
          summary: "[]",
        },
      },
      description: "Labels for table headers",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfOrderHistory },
  template: `
  <SfOrderHistory
    :account="account"
    :orderHistoryDescription="orderHistoryDescription"
    :noOrdersDescription="noOrdersDescription"
    :tableHeaders="tableHeaders"
    :noOrdersButtonText="noOrdersButtonText"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  account: accountData,
  orderHistoryDescription:
    "Check the details and status of your orders in the online store. You can also cancel your order or request a return.",
  noOrdersDescription: "You currently have no order history.",
  tableHeaders: [
    "Order ID",
    "Payment date",
    "Payment method",
    "Amount",
    "Status",
  ],
};
