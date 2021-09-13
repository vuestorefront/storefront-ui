import { SfShippingDetails } from "@storefront-ui/vue";

const accountData = {
  firstName: "John",
  lastName: "Dog",
  email: "johndog@email.com",
  password: "a*23Et",
  shipping: [
    {
      firstName: "John",
      lastName: "Dog",
      streetName: "Sezame Street",
      apartment: "24/193A",
      city: "Wroclaw",
      state: "Lower Silesia",
      zipCode: "53-540",
      country: "Poland",
      phoneNumber: "(00)560 123 456",
    },
    {
      firstName: "John",
      lastName: "Dog",
      streetName: "Sezame Street",
      apartment: "20/193A",
      city: "Wroclaw",
      state: "Lower Silesia",
      zipCode: "53-603",
      country: "Poland",
      phoneNumber: "(00)560 123 456",
    },
  ],
  orders: [
    ["#35765", "4th Nov, 2019", "Visa card", "$12.00", "In process"],
    ["#35766", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
    ["#35768", "4th Nov, 2019", "Mastercard", "$12.00", "Finalised"],
    ["#35769", "4th Nov, 2019", "Paypal", "$12.00", "Finalised"],
  ],
};

export default {
  title: "Components/Templates/MyAccount/ShippingDetails",
  component: SfShippingDetails,
  argTypes: {
    account: {
      control: "Object",
      table: {
        category: "Props",
      },
      defaultValue: accountData,
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfShippingDetails },
  template: `
  <SfShippingDetails 
    :account="account"
  >
  </SfShippingDetails>`,
});

export const Common = Template.bind({});
Common.args = {};
