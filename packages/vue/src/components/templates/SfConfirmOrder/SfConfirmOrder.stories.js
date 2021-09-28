import { SfConfirmOrder } from "@storefront-ui/vue"

const orderData = {
  shipping: {
    shippingMethod: {
      isOpen: false,
      price: "$5.99",
      delivery: "Delivery from 3 to 7 business days",
      label: "Pickup in the store",
      value: "store",
      description:
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
    },
  },
  orderItems: [
    {
      title: "Cream Beach Bag",
      image: "/assets/storybook/Home/productA.jpg",
      price: { regular: "$50.00" },
      configuration: [
        { name: "Size", value: "XS" },
        { name: "Color", value: "White" },
      ],
      qty: 1,
      sku: "MSD23-345-324",
    },
    {
      title: "Vila stripe maxi dress",
      image: "/assets/storybook/Home/productB.jpg",
      price: { regular: "$50.00", special: "$20.05" },
      configuration: [
        { name: "Size", value: "XS" },
        { name: "Color", value: "White" },
      ],
      qty: 2,
      sku: "MSD23-345-325",
    },
  ],
}

const tableHeadersData = [
  "Size",
  "Description",
  "Quantity",
  "Colour",
  "Amount"
];

export default {
  title: "Components/Templates/ConfirmOrder",
  component: SfConfirmOrder,
  argTypes: {
    orderTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Order details",
      description: "Heading text",
    },
    orderTitleLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
      description: "Heading text size",
    },
    order: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: orderData,
      description: "Order data",
    },
    tableHeaders: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: tableHeadersData,
      description: "Order table headers",
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfConfirmOrder },
  template: `
  <SfConfirmOrder
    :orderTitle="orderTitle"
    :orderTitleLevel="orderTitleLevel"
    :order="order"
    :table-headers="tableHeaders"
  >
  </SfConfirmOrder>`,
})

export const Common = Template.bind({})
Common.args = {}
